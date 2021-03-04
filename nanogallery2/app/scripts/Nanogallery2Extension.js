// https://codepen.io/JonMerlevede/pen/VMBwaJ

function debug(message) {
	console.log(message);
}


var myNanogallery2 = function() {
	var G = this;

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
	};
};