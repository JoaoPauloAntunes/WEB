$(() => {
  const $nanogallery2 = $("#nanogallery2");
  const nanogallery2Functions = new Nanogallery2Functions($nanogallery2);


  $nanogallery2.nanogallery2({
    itemsBaseURL: "/app/images/",
    items: [
      {
        src: "picture_2.jpeg", // image url
        title: "Album A",      // media title
        ID: 1,                 // item ID
        kind: "album",         // item's kind. Possible values: [image, album]
      },
      {
        src: "picture_2.jpeg",        // image url
        srct: "picture_2.jpeg",       // thumbnail url
        title: "Title 2",             // media title
        description: "Description 2", // media description
        ID: 100,
        albumID: 1,
      },
      // album 1
      {
        src: "picture_3.jpeg",
        srct: "picture_3.jpeg",
        title: "Title 3",
        description: "Description 3",
        ID: 101,
        albumID: 1,
      },
      {
        src: "picture_4.jpeg",
        srct: "picture_4.jpeg",
        title: "Title 4",
        description: "Description 4",
        ID: 102,
        albumID: 1,
      },
      {
        src: "picture_5.jpeg",
        srct: "picture_5.jpeg",
        title: "Title 5",
        description: "Description 5",
        ID: 103,
        albumID: 1,
      },
      {
        src: "picture_6.jpeg",
        srct: "picture_6.jpeg",
        title: "Title 6",
        description: "Description 6",
        ID: 104,
        albumID: 1,
      },
      {
        src: "picture_7.jpeg",
        srct: "picture_7.jpeg",
        title: "Title 7",
        description: "Description 7",
        ID: 105,
        albumID: 1,
      },
      {
        src: "picture_8.jpeg",
        srct: "picture_8.jpeg",
        title: "Title 8",
        description: "Description 8",
        ID: 106,
        albumID: 1,
      },
      {
        src: "picture_9.jpeg",
        srct: "picture_9.jpeg",
        title: "Title 9",
        description: "Description 9",
        ID: 107,
        albumID: 1,
      },
      {
        src: "picture_11.jpeg",
        srct: "picture_11.jpeg",
        title: "Title 11",
        description: "Description 11",
        ID: 108,
        albumID: 1,
      },
      {
        src: "picture_12.jpeg",
        srct: "picture_12.jpeg",
        title: "Title 12",
        description: "Description 12",
        ID: 109,
        albumID: 1,
      },
      {
        src: "picture_13.jpeg",
        srct: "picture_13.jpeg",
        title: "Title 13",
        description: "Description 13",
        ID: 110,
        albumID: 1,
      },
      {
        src: "picture_14.jpeg",
        srct: "picture_14.jpeg",
        title: "Title 14",
        description: "Description 14",
        ID: 111,
        albumID: 1,
      },
      {
        src: "picture_15.jpeg",
        srct: "picture_15.jpeg",
        title: "Title 15",
        description: "Description 15",
        ID: 112,
        albumID: 1,
      },
      //////////////////////////////////////////////////////////////////////////
      // album 2
      { src: "picture_3.jpeg", title: "album B", ID: 2, kind: "album" },
      {
        src: "picture_4.jpeg",
        srct: "picture_4.jpeg",
        title: "Title 14",
        description: "Description 14",
        ID: 200,
        albumID: 2,
      },
      {
        src: "picture_5.jpeg",
        srct: "picture_5.jpeg",
        title: "Title 15",
        description: "Description 15",
        ID: 201,
        albumID: 2,
      },
      {
        src: "picture_6.jpeg",
        srct: "picture_6.jpeg",
        title: "Title 16",
        description: "Description 16",
        ID: 202,
        albumID: 2,
      },
      {
        src: "picture_7.jpeg",
        srct: "picture_7.jpeg",
        title: "Title 17",
        description: "Description 17",
        ID: 203,
        albumID: 2,
      },
      {
        src: "picture_8.jpeg",
        srct: "picture_8.jpeg",
        title: "Title 18",
        description: "Description 18",
        ID: 204,
        albumID: 2,
      },
      {
        src: "picture_9.jpeg",
        srct: "picture_9.jpeg",
        title: "Title 19",
        description: "Description 19",
        ID: 205,
        albumID: 2,
      },
    ],
    thumbnailWidth: "auto",
    thumbnailHeight: "220",
    thumbnailBorderVertical: 3,
    thumbnailBorderHorizontal: 3,
    thumbnailLabel: {
      position: "overImageOnBottom",
      titleMultiLine: true,
      displayDescription: true,
      descriptionMultiLine: true,
    },
    allowHTMLinData: false,
    galleryDisplayMode: "pagination",
    galleryMaxRows: 2,
    galleryPaginationMode: "dots",
    thumbnailAlignment: "center",
    galleryFilterTags: "title",
    thumbnailLevelUp: true,
    thumbnailOpenImage: true,
    viewerToolbar: {
      display: true,
      standard: "label",
      // minimized: "label",
    },
    viewerTools: {
      topLeft: "pageCounter, playPauseButton, infoButton",
      topRight:
        "zoomButton, rotateLeft, rotateRight, custom1, downloadButton, fullscreenButton, closeButton",
    },
    // viewerTheme: "dark",
    viewerImageDisplay: "bestImageQuality",
    thumbnailToolbarImage: {
      topRight: "download, info",
    },
    icons: {
      thumbnailDownload:
        '<span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-download fa-stack-1x fa-inverse"></i></span>',
      thumbnailInfo:
        '<span class="fa-stack"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-question fa-stack-1x fa-inverse"></i></span>',
      viewerCustomTool1:
        '<span class="fa-stack"><i class="fa fa-trash-alt fa-stack-1x"></i></span>',
    },
    colorScheme: {
      thumbnailIcon: {
        color: "#444",
      },
    },
    thumbnailDisplayTransition: "scaleUp",
    thumbnailDisplayTransitionDuration: 500,
    thumbnailDisplayInterval: 30,
    thumbnailHoverEffect2: "borderLighter",
    thumbnailSelectable: true, // enables selection mode
    galleryDisplayTransition: "rotateX",
    galleryDisplayTransitionDuration: 500,
    paginationVisiblePages: true,
    thumbnailLevelUp: false,
    locationHash: true,
    touchAnimationL1: true,
    fnImgToolbarCustClick: delItem,
  });



  // tmp
  const albumId = "1";


  $(".btn-delete-selected-media").on("click", function () {
    /* $nanogallery2.nanogallery2("data").items.forEach(function(item) {
      if (item.kind == "image") {
        item.delete();
      }
    }); */
    console.log(nanogallery2Functions.allSelectedMediaFromAlbum(albumId));
    nanogallery2Functions.allSelectedMediaFromAlbum(albumId).forEach(item => item.delete());

    $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
    checkSelectedItems();

    $nanogallery2.nanogallery2("resize");
  });


  // retrieve selected items
  $nanogallery2.on("itemSelected.nanogallery2 itemUnSelected.nanogallery2", checkSelectedItems);


  $(".btn-cancel").on("click", function() {
    nanogallery2Functions.selectNoneItem();
    changeHeaderToMenu();

    $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
    checkSelectedItems();
  });


  $(".btn-unselect-all-media").on("click", function() {
    nanogallery2Functions.selectNoneItem();

    $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
    checkSelectedItems();
  });


  $(".btn-select-all-media").on("click", function() {
    nanogallery2Functions.selectAllItensFromAlbum(albumId);
    $nanogallery2.nanogallery2("data").gallery.nbSelected = nanogallery2Functions.countSelectedMediaFromAlbum(albumId);
    checkSelectedItems();
  });
  


  function checkSelectedItems() {
    const ngy2data = $nanogallery2.nanogallery2("data");
    console.log(ngy2data.gallery.nbSelected);

    if (ngy2data.gallery.nbSelected > 0) {
      changeHeaderToSelectionMenu();

      if (ngy2data.gallery.nbSelected == 1) {
        $("#nb_selected").text(`1 foto selecionada`);
      } else {
        $("#nb_selected").text(`${ngy2data.gallery.nbSelected} fotos selecionadas`);
      }
    } else {
      changeHeaderToMenu();
    }

    // selected items
    var sel = "";
    ngy2data.items.forEach(function (item) {
      if (item.selected) {
        sel += `${item.GetID()}[${item.title}] `;
      }
    });
    $("#selection").text(sel);
  }


  function changeHeaderToSelectionMenu() {
    $("#menu").addClass("d-none");
    $("#selection_menu").removeClass("d-none");
  }

  
  function changeHeaderToMenu() {
    $("#menu").removeClass("d-none");
    $("#selection_menu").addClass("d-none");  
  }


  function delItem(customElementName, $customIcon, item) {
    console.log("delItem");
    console.log(customElementName);
    console.log($customIcon);
    console.log(item);
    console.log(item.GetID());
    console.log(item.src);

    const trashCart = "custom1";
    if (customElementName == trashCart) {
      /* const ngy2data = $nanogallery2.nanogallery2("data");
      ngy2data.items.splice(0, 1);
      $nanogallery2.nanogallery2("resize"); */
    }
  }
});
