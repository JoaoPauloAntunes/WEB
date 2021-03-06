// https://codepen.io/JonMerlevede/pen/VMBwaJ

function debug(message) {
	console.log(message);
}

function get_share_info(shareId) {
	var deferred = $.Deferred();
	$.get("https://www.amazon.fr/drive/v1/shares/"+shareId+"?resourceVersion=V2&ContentType=JSON&asset=ALL").done(function(page_contents){
		debug(page_contents);
		deferred.resolve(page_contents);
	});
	return deferred.promise();
}
function get_node_info(shareId, nodeId, extra) {
	extra = extra || {};
	var deferred = $.Deferred();
	//var limit = 200;
	var params = {
			resourceVersion: "V2",
			ContentType: "JSON",
			tempLink: "true",
			//limit: limit,
			asset: 'ALL',
			shareId: shareId
	};
	$.extend(params, extra);
	$.get("https://www.amazon.fr/drive/v1/nodes/"+nodeId+"/children", params).done(function(page_contents){
		//var c = JSON.parse(page_contents);
		debug(page_contents)
		deferred.resolve(page_contents);
	});
	return deferred.promise();
}
function get_share_contents(shareId) {
	var deferred = $.Deferred();
	var merge_nodeinfo = function(shareName, nodeId, nodeInfo) {
		if (nodeInfo.count > nodeInfo.data.length) {
			get_node_info(shareId, nodeId, {startToken: nodeInfo.nextToken}).done(function(newInfo){
				$.merge(nodeInfo.data, newInfo.data);
				merge_nodeinfo(shareName, nodeId, nodeInfo);
			});
		} else {
			deferred.resolve(shareName, nodeInfo);
		}
	}
	var process_node_id = function(shareName, nodeId) {
		debug("Processing node ID " + nodeId);
		get_node_info(shareId, nodeId).done(function(nodeInfo) {
			if(nodeInfo.count == 1 && ("collectionProperties" in nodeInfo.data[0] && "covers" in nodeInfo.data[0].collectionProperties)) {
				debug("Detected covers; going deeper");
				var childNodeId = nodeInfo.data[0].id;
				process_node_id(shareName, childNodeId);
			} else if(nodeInfo.count >= 1 && nodeInfo.data[0].kind == "FOLDER") {
				debug("Detected folder; going deeper");
				var childNodeId = nodeInfo.data[0].id;
				process_node_id(shareName, childNodeId);
			} else {
				merge_nodeinfo(shareName, nodeId, nodeInfo);
			}
		});
	};
	get_share_info(shareId).done(function(shareInfo) {
		var nodeId = shareInfo.nodeInfo.id;
		var shareName = shareInfo.nodeInfo.name;
		process_node_id(shareName, nodeId);
	});
	return deferred.promise();
}


function sortObjects(obj1, obj2) {
	var getTime = function(obj) {
		if ("contentProperties" in obj && "image" in obj.contentProperties && "dateTimeOriginal" in obj.contentProperties.image) {
			return obj.contentProperties.image.dateTimeOriginal;
		} else {
			return obj.createdDate;
		}
	}
	var time1 = new Date(getTime(obj1));
	var time2 = new Date(getTime(obj2));
	return time1 - time2;
}

function sortObjectsByName(obj1, obj2) {
	var name1 = obj1.name.toLowerCase();
	var name2 = obj2.name.toLowerCase();
	if (name1 < name2) {
		return -1;
	} else if (name1 < name2) {
		return 1;
	} else {
		return 0;
	}
}

function alertDuplicates(list) {
	var seen = {};
	list.forEach(function(e, i) {
		if (e in seen) {
			alert('Duplicate found! ' + e);
		} else {
			seen[e] = null;
		}
	});
}

function getDescription(obj) {
	if (!("contentProperties" in obj && "image" in obj.contentProperties)) {
		return "No image information available";
	}
	var image = obj.contentProperties.image;
	var description = [];
	if ('dateTimeOriginal' in image) {
		var date = new Date(image.dateTimeOriginal);
		var day = date.getDay() + "/" + date.getMonth() + "/" + date.getFullYear();
		var time = date.getHours() + ":" + date.getMinutes()
		description.push("Taken on " + day + ", " + time);
	}
	if ('apertureValue' in image) {
		var fvalue = image.apertureValue;
		if (image.apertureValue.includes("/")) {
			var aper = image.apertureValue.split("/");
			var numer = parseFloat(aper[0]);
			var denom = parseFloat(aper[1]);
			var fvalue = Math.round((numer / denom)*100)/100;
		}
		description.push("Aperture: f/" + fvalue);
	}
	if ('iso' in image) {
		description.push("ISO: " + image.iso);
	}
	if ('exposureTime' in image) {
		description.push("Exposure: " + image.exposureTime);
	}
	if ('exposureMode' in image && 'exposureProgram' in image) {
		description.push("Program: " + image.exposureProgram + ", " + image.exposureMode);
	}
	if ('width' in image && 'height' in image) {
		description.push("Dimensions: " + image.width + 'x' + image.height + "px");
	}
	return description.join(". ");
}


function requestDownloadLink(shareId, nodeIds) {
	var deferred = $.Deferred();
	var url = "https://www.amazon.fr/drive/v1/batchLink?shareId=" + shareId;
	var payload = JSON.stringify({
		ContentType: 'JSON',
		resourceVersion: 'V2',
		nodeIds: nodeIds
	});
	debug(payload);
	$.ajax({
		type: 'POST',
		url: url,
		//contentType: 'application/json; charset=utf-8',
		dataType: 'json',
		data: payload
	}).done(function(data) {
		deferred.resolve(data.links.content);
	});
	return deferred.promise();
}



function getShareId() {
	return "NtI6DiuWmENEk64ivtyqfFX0I23F4OaI6iI3qXQQRxQ";
}

function loadGallery(resized, shareName, shareData) {
	shareData.data = shareData.data.filter(function(el) {
		return el.contentProperties.contentType.startsWith('image');
	});
	shareData.data.sort(sortObjects);
	alertDuplicates(shareData.data.map(function(obj){ return obj.name;}));
	var items = [];
	for (var i = 0; i < shareData.data.length; i++) {
		var obj = shareData.data[i];
		var imageWidth = parseFloat(obj.contentProperties.image.width);
		var imageHeight = parseFloat(obj.contentProperties.image.height);
		var imageRatio = imageWidth / imageHeight;
		var screenWidth = screen.width; //screen.availWidth;
		var screenHeight = screen.height; // screen.availHeight;
		var screenPixelRatio = window.devicePixelRatio || 1;
		var effectiveScreenWidth = screenWidth*screenPixelRatio;
		var effectiveScreenHeight = screenHeight*screenPixelRatio;
		var screenRatio = screenWidth/screenHeight;
		var pictureViewWidth = Math.min(effectiveScreenWidth, Math.round(effectiveScreenHeight * imageRatio));
		var pictureViewHeight = Math.min(effectiveScreenHeight, Math.round(effectiveScreenWidth / imageRatio));
		var thumbnailHeight = 300; // height is constant / fixed
		var thumbnailWidth = Math.round(thumbnailHeight*imageRatio);
		var thumbnailViewSize = Math.max(thumbnailWidth, thumbnailHeight);
		var getViewBox = function() {
			if(resized) {
				return '?viewBox=' + Math.max(pictureViewWidth, pictureViewHeight);
			} else {
				return '';
			}
		};
		items.push({
			customData: obj.id,
			src: obj.tempLink + getViewBox(),
			srct: obj.tempLink + '?viewBox=' + thumbnailViewSize,
			downloadURL: obj.tempLink,
			description: getDescription(obj),
			width: pictureViewWidth,
			height: pictureViewHeight,
			imgtWidth: thumbnailWidth,
			imgtHeight: thumbnailHeight//,
		});
	}
	$("#images").nanogallery2({
		items: items,
		paginationSwipe: true,
		colorScheme: "light",
		thumbnailHeight: 300,
		thumbnailWidth: "auto",
		galleryDisplayMode: "pagination",
		galleryMaxRows: 12,
		thumbnailGutterWidth: 5,
		thumbnailGutterHeight: 5,
		thumbnailBorderVertical: 0,
		thumbnailBorderHorizontal: 0,
		galleryPaginationMode: 'numbers',
		paginationVisiblePages: 9,
		thumbnailDisplayTransitionDuration: 200,
		thumbnailDisplayTransition: 'scaleUp',
		thumbnailDisplayInterval: 0,
		viewerFullscreen: true,
		thumbnailLabel: {display: false},
		viewerToolbar: {
			display: false,
			standard :'minimizeButton, infoButton, downloadButton, linkOriginalButton, label, fullscreenButton'
			//standard :'minimizeButton, infoButton, downloadButton, linkOriginalButton, fullscreenButton'
		},
		viewerTools: {
			topRight: 'zoomButton, downloadButton, shareButton, infoButton, fullscreenButton, closeButton'
		},
		//icons: {
		//	viewerFullscreenOff: '<i class="nGY2Icon icon-resize-full"></i>'
		//}
	});
	//debug($("#images").nanogallery2('data'));
}

$(document).ready(function() {
	var shareId = getShareId();
	get_share_contents(shareId).done(function(shareName, shareData) {
		$("#gallery_title").text(shareName);
		window.document.title = shareName;
		loadGallery(true, shareName, shareData);
		selector.init();
		var G = $("#images");
		var headerHeight = G.offset().top;
		G.on('pageChanged.nanogallery2', function(e){
			window.scrollTo(0,headerHeight+1);
		});
		var box = $("#resizeCheckbox");
		$(".jswitch").tooltip();
		box.change(function() {
			$("#images").nanogallery2('destroy');
			loadGallery(!this.checked, shareName, shareData);
			resetDownloadLink(shareId);
		});
		//$(window).on("orientationchange", function() {
		//	G.nanogallery2('closeViewer');
		//	//G.nanogallery2('destroy');
		//	//loadGallery(box.checked, shareName, shareData);
		//	//resetDownloadLink(shareId);
		//});
		resetDownloadLink(shareId);
	});
});

var selector = function() {
	var G = null;
	var allItems = function() {
		return G.nanogallery2('data').items;
	};

	var allSelectedItems = function() {
		return G.nanogallery2('itemsSelectedGet');
	};

	var allUnSelectedItems = function() {
		return allItems().filter(function(el) {
			return !el.selected;
		});
	};

	var allSelectedNodeIds = function() {
		var nodeIds = [];
		allSelectedItems().forEach(function(e, i) {
			if (!((typeof e.customData) == "string") || e.customData == "") {
				debug("No custom data detected! Skipping");
				debug(e);
			} else {
				nodeIds.push(e.customData);
			}
		});
		debug(nodeIds);
		return nodeIds;
	}

	var invertSelection = function() {
		var selectedItems = allSelectedItems();
		var unSelectedItems = allUnSelectedItems();
		G.nanogallery2('itemsSetSelectValue', allSelectedItems(), false);
		G.nanogallery2('itemsSetSelectValue', allUnSelectedItems(), false);
		conditionalTrigger();
		return false;
	};

	var selectAll = function() {
		G.nanogallery2('itemsSetSelectedValue', allUnSelectedItems(), true);
		conditionalTrigger();
		return false;
	};

	var selectNone = function() {
		G.nanogallery2('itemsSetSelectedValue', allSelectedItems(), false);
		conditionalTrigger();
		return false;
	};

	var hooks = {
		none: [],
		first: [],
		notnone: [],
		all: []
	};

	var addHook = function(arr, f) {
		if (!$.isFunction(f)) { debug("Given f is not a function! (...)"); }
		arr.push(f);
	}

	var countSelectedItems = function() {
		return allSelectedItems().length;
	}

	var lastValue = -1;
	var trigger = function() {
		var count = countSelectedItems();
		if (count == 0) {
			debug("executing none hooks");
			debug(hooks.none);
			hooks.none.forEach(function(f) {f()});
		}
		if (count == 1) {
			hooks.first.forEach(function(f) {f()});
		}
		if (count != 0) {
			hooks.notnone.forEach(function(f) {f()});
		}
		if (count == allItems().length) {
			hooks.all.forEach(function(f) {f()});
		}
	}
	var conditionalTrigger = function() {
		debug("triggered");
		var count = countSelectedItems();
		debug("Count: "+ count);
		debug('Last value: '+ lastValue);
		if (count != lastValue) {
			trigger();
		}
		lastValue = count;
	}

	var addHooks = {};
	var clearHooks = {};
	for (var key in hooks) {
		debug(key);
		addHooks[key] = function(k) {
			return function(f) {
				addHook(hooks[k], f);
				debug(hooks);
			};
		}(key);
		clearHooks[key] = function() {hooks[key].length = 0;};
	}
	debug(addHooks);
	return {
		selected: {
			items: allSelectedItems,
			nodeids: allSelectedNodeIds
		},
		unselected: {
			items: allUnSelectedItems
		},
		select: {
			invert: invertSelection,
			all: selectAll,
			none: selectNone
		},
		selectable: function(isSelectable) {
			if (!isSelectable) {
				selectNone();
			}
			G.nanogallery2('option', 'thumbnailSelectable', isSelectable);
		},
		hooks: {
			add: addHooks,
			clear: clearHooks,
			clearAll: function() {
				for (var key in hooks) {
					hooks[key].length = 0;
				}
			}
		},
		trigger: trigger,
		init: function() {
			G = $("#images");
			G.on('itemSelected.nanogallery2', function() {
				conditionalTrigger();
			});
			G.on('itemUnSelected.nanogallery2', function() {
				conditionalTrigger();
			});
		}
	};
}();

function resetDownloadLink(shareId) {
	var select_link = $("#download_link");
	select_link.siblings().remove();
	select_link.unbind();
	select_link.text("Download full-resolution images");
	toggleUnderline(select_link, true);
	select_link.click(function() {
		select_link.unbind();
		var select_all_link = $('<a href="#"></a>');
		var space = $('<span style="display:inline-block; width:1em; text-align: center; color:white;">|<span>')
		var space2 = $('<span style="display:inline-block; width:1em; text-align: center; color:white;">|<span>')
		var cancel_link = $('<a href="#">Cancel download</a>');
		space.insertAfter(select_link);
		select_all_link.insertAfter(space);
		space2.insertAfter(select_all_link);
		cancel_link.insertAfter(space2);

		selector.hooks.clearAll();
		selector.hooks.add.none(function() {
			select_link.unbind();
			select_link.text('Select images to download ');
			toggleUnderline(select_link, false);
		});
		selector.hooks.add.notnone(function() {
			select_link.unbind();
			select_link.text('Download selected images ');
			toggleUnderline(select_link, true);
			select_link.click(function() {
				select_link.unbind();
				var selectedIds = selector.selected.nodeids();
				select_link.text("Requesting download... Please wait, downloading will start automatically.");
				selector.hooks.clearAll();
				selector.selectable(false);
				toggleUnderline(select_link, false);
				space.remove();
				select_all_link.remove();
				space2.remove();
				cancel_link.remove();
				//debug(selector.selected.nodeids)
				requestDownloadLink(shareId, selectedIds).done(function(url) {
					select_link.attr("href", url);
					toggleUnderline(select_link, true); // underline
					select_link.unbind();
					select_link.text("Click here to start download");
					select_link.click(function() {
						resetDownloadLink(shareId);
						return true;
					});
					document.getElementById("download_link").click();
				});
				return false;
			});
		});
		selector.hooks.add.none(function() {
			select_all_link.unbind();
			select_all_link.text("Select all");
			select_all_link.click(selector.select.all);
			return false;
		});
		selector.hooks.add.notnone(function() {
			select_all_link.unbind();
			select_all_link.text("Undo selection");
			select_all_link.click(selector.select.none);
			return false;
		});
		cancel_link.click(function() {
			space.remove();
			select_all_link.remove();
			space2.remove();
			cancel_link.remove();
			selector.hooks.clearAll();
			selector.selectable(false);
			resetDownloadLink(shareId);
		});
		selector.selectable(true);
		selector.trigger();
		return false;
	});
}

function requestSelection(shareId) {
	var select_link = $("#select_link");
	var images = $("#images");
	select_link.unbind();
	select_link.text("Requesting download...");
	toggleUnderline(select_link, false); // remove decoration
	requestDownloadLink(shareId, selector.selected.nodeids).done(function(url) {
		select_link.attr("href", url);
		toggleUnderline(select_link, true); // underline
		select_link.unbind();
		select_link.text("Click here to start downloading selected images");
		select_link.click(function() {
			selector.selectable(false);
			//toggleSelectable();
			select_link.unbind();
			resetSelectLink(shareId);
			return true;
		});
	});
	return false;
}

function toggleUnderline(el, stat) {
	if (stat == undefined) {
		stat = (el.css('text-decoration') == 'underline');
	}
	if (stat) {
		el.css('text-decoration', 'underline');
	} else {
		el.css('text-decoration', 'none');
	}
}

function requestDownload(shareId, shareData) {
	var nodeIds = shareData.data.map(function(obj){return obj.id;})
	requestDownloadLink(shareId, nodeIds).done(function(url) {
		var link_elem = $("#download_link");
		//link_elem.unbind();
		link_elem.attr("href", url);
		toggleUnderline(link_elem);
		link_elem.text("Click here to start download");
	});
} 