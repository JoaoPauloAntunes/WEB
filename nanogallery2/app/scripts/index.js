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
        ID: 10,
        albumID: 1,
      },
      // album 1
      {
        src: "picture_3.jpeg",
        srct: "picture_3.jpeg",
        title: "Title 3",
        description: "Description 3",
        ID: 3,
        albumID: 1,
      },
      {
        src: "picture_4.jpeg",
        srct: "picture_4.jpeg",
        title: "Title 4",
        description: "Description 4",
        ID: 4,
        albumID: 1,
      },
      {
        src: "picture_5.jpeg",
        srct: "picture_5.jpeg",
        title: "Title 5",
        description: "Description 5",
        ID: 5,
        albumID: 1,
      },
      {
        src: "picture_6.jpeg",
        srct: "picture_6.jpeg",
        title: "Title 6",
        description: "Description 6",
        ID: 6,
        albumID: 1,
      },
      {
        src: "picture_7.jpeg",
        srct: "picture_7.jpeg",
        title: "Title 7",
        description: "Description 7",
        ID: 7,
        albumID: 1,
      },
      {
        src: "picture_8.jpeg",
        srct: "picture_8.jpeg",
        title: "Title 8",
        description: "Description 8",
        ID: 8,
        albumID: 1,
      },
      {
        src: "picture_9.jpeg",
        srct: "picture_9.jpeg",
        title: "Title 9",
        description: "Description 9",
        ID: 9,
        albumID: 1,
      },
      {
        src: "picture_10.jpeg",
        srct: "picture_10.jpeg",
        title: "Title 10",
        description: "Description 10",
        ID: 10,
        albumID: 1,
      },
      {
        src: "picture_11.jpeg",
        srct: "picture_11.jpeg",
        title: "Title 11",
        description: "Description 11",
        ID: 11,
        albumID: 1,
      },
      {
        src: "picture_12.jpeg",
        srct: "picture_12.jpeg",
        title: "Title 12",
        description: "Description 12",
        ID: 12,
        albumID: 1,
      },
      {
        src: "picture_13.jpeg",
        srct: "picture_13.jpeg",
        title: "Title 13",
        description: "Description 13",
        ID: 13,
        albumID: 1,
      },
      {
        src: "picture_14.jpeg",
        srct: "picture_14.jpeg",
        title: "Title 14",
        description: "Description 14",
        ID: 14,
        albumID: 1,
      },
      {
        src: "picture_15.jpeg",
        srct: "picture_15.jpeg",
        title: "Title 15",
        description: "Description 15",
        ID: 15,
        albumID: 1,
      },
      { src: "picture_15.jpeg", srct: "picture_15.jpeg", title: "Title 15", description: "Description 15", ID: 15, albumID: 1 },
      { src: "picture_15.jpeg", srct: "picture_3.jpeg", title: "Title 16", description: "Description 16", ID: 16, albumID: 1 },
      { src: "picture_15.jpeg", srct: "picture_15.jpeg", title: "Title 17", description: "Description 17", ID: 17, albumID: 1 },
      { src: "picture_15.jpeg", srct: "picture_15.jpeg", title: "Title 18", description: "Description 18", ID: 18, albumID: 1 },
      { src: "picture_15.jpeg", srct: "picture_8.jpeg", title: "Title 19", description: "Description 19", ID: 19, albumID: 1 },
      { src: "picture_15.jpeg", srct: "picture_15.jpeg", title: "Title 20", description: "Description 20", ID: 20, albumID: 1 },
      { src: "picture_15.jpeg", srct: "picture_11.jpeg", title: "Title 21", description: "Description 21", ID: 21, albumID: 1 },
      { src: "picture_15.jpeg", srct: "picture_15.jpeg", title: "Title 22", description: "Description 22", ID: 22, albumID: 1 },
      { src: "picture_15.jpeg", srct: "picture_13.jpeg", title: "Title 23", description: "Description 23", ID: 23, albumID: 1 },
      // album 2
      { src: "picture_3.jpeg", title: "album B", ID: 2, kind: "album" },
      {
        src: "picture_3.jpeg",
        srct: "picture_3.jpeg",
        title: "Title 13",
        description: "Description 13",
        ID: 23,
        albumID: 2,
      },
      {
        src: "picture_4.jpeg",
        srct: "picture_4.jpeg",
        title: "Title 14",
        description: "Description 14",
        ID: 24,
        albumID: 2,
      },
      {
        src: "picture_5.jpeg",
        srct: "picture_5.jpeg",
        title: "Title 15",
        description: "Description 15",
        ID: 25,
        albumID: 2,
      },
      {
        src: "picture_6.jpeg",
        srct: "picture_6.jpeg",
        title: "Title 16",
        description: "Description 16",
        ID: 26,
        albumID: 2,
      },
      {
        src: "picture_7.jpeg",
        srct: "picture_7.jpeg",
        title: "Title 17",
        description: "Description 17",
        ID: 27,
        albumID: 2,
      },
      {
        src: "picture_8.jpeg",
        srct: "picture_8.jpeg",
        title: "Title 18",
        description: "Description 18",
        ID: 28,
        albumID: 2,
      },
      {
        src: "picture_9.jpeg",
        srct: "picture_9.jpeg",
        title: "Title 19",
        description: "Description 19",
        ID: 29,
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
    fnImgToolbarCustClick: delPhoto,
  });


  // delete selection
  $("#btn_del").on("click", function () {
    const ngy2data = $nanogallery2.nanogallery2("data");
    ngy2data.items.forEach(function (item) {
      if (item.selected) {
        item.delete();
      }
    });
    $nanogallery2.nanogallery2("resize");
  });


  // switch selection mode on/off
  $("#btn_select_mode").on("click", function () {
    var b = !$nanogallery2.nanogallery2("option", "thumbnailSelectable");
    $nanogallery2.nanogallery2("option", "thumbnailSelectable", b);
  });


  // retrieve selected items
  $nanogallery2.on("itemSelected.nanogallery2 itemUnSelected.nanogallery2", checkSelectedPhotos);


  $("#selection_menu_cancel").on("click", function() {
    nanogallery2Functions.selectNone();
    changeHeaderToMenu();

    $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
  });


  $(".unselect_all_photos").on("click", function() {
    nanogallery2Functions.selectNone();
    $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
    checkSelectedPhotos();
  });


  $(".select_all_photos").on("click", function() {
    nanogallery2Functions.selectAll();
    $nanogallery2.nanogallery2("data").gallery.nbSelected = nanogallery2Functions.countSelectedItems();
    checkSelectedPhotos();
  });
  


  function checkSelectedPhotos() {
    const ngy2data = $nanogallery2.nanogallery2("data");

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


  function delPhoto(customElementName, $customIcon, item) {
    console.log("delPhoto");
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
