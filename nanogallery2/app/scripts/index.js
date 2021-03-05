$(() => {
  const $nanogallery2 = $("#nanogallery2");
  const nanogallery2Functions = new Nanogallery2Functions($nanogallery2);


  $nanogallery2.nanogallery2({
    itemsBaseURL: "/app/images/",
    items: [
      // album 1
      {
        src: "picture_2.jpeg", // image url
        title: "Album A",      // media title
        ID: "album_A",         // item ID
        kind: "album",         // item's kind. Possible values: [image, album]
      },
      {
        src: "picture_2.jpeg",        // image url
        srct: "picture_2.jpeg",       // thumbnail url
        title: "Title 2",             // media title
        description: "Description 2", // media description
        ID: 100,
        albumID: "album_A",
      },
      {
        src: "picture_3.jpeg",
        srct: "picture_3.jpeg",
        title: "Title 3",
        description: "Description 3",
        ID: 101,
        albumID: "album_A",
      },
      {
        src: "picture_4.jpeg",
        srct: "picture_4.jpeg",
        title: "Title 4",
        description: "Description 4",
        ID: 102,
        albumID: "album_A",
      },
      {
        src: "picture_5.jpeg",
        srct: "picture_5.jpeg",
        title: "Title 5",
        description: "Description 5",
        ID: 103,
        albumID: "album_A",
      },
      {
        src: "picture_6.jpeg",
        srct: "picture_6.jpeg",
        title: "Title 6",
        description: "Description 6",
        ID: 104,
        albumID: "album_A",
      },
      {
        src: "picture_7.jpeg",
        srct: "picture_7.jpeg",
        title: "Title 7",
        description: "Description 7",
        ID: 105,
        albumID: "album_A",
      },
      {
        src: "picture_8.jpeg",
        srct: "picture_8.jpeg",
        title: "Title 8",
        description: "Description 8",
        ID: 106,
        albumID: "album_A",
      },
      {
        src: "picture_9.jpeg",
        srct: "picture_9.jpeg",
        title: "Title 9",
        description: "Description 9",
        ID: 107,
        albumID: "album_A",
      },
      {
        src: "picture_11.jpeg",
        srct: "picture_11.jpeg",
        title: "Title 11",
        description: "Description 11",
        ID: 108,
        albumID: "album_A",
      },
      {
        src: "picture_12.jpeg",
        srct: "picture_12.jpeg",
        title: "Title 12",
        description: "Description 12",
        ID: 109,
        albumID: "album_A",
      },
      {
        src: "picture_13.jpeg",
        srct: "picture_13.jpeg",
        title: "Title 13",
        description: "Description 13",
        ID: 110,
        albumID: "album_A",
      },
      {
        src: "picture_14.jpeg",
        srct: "picture_14.jpeg",
        title: "Title 14",
        description: "Description 14",
        ID: 111,
        albumID: "album_A",
      },
      {
        src: "picture_15.jpeg",
        srct: "picture_15.jpeg",
        title: "Title 15",
        description: "Description 15",
        ID: 112,
        albumID: "album_A",
      },
      //////////////////////////////////////////////////////////////////////////
      // album 2
      { src: "picture_3.jpeg", title: "album B", ID: "album_B", kind: "album" },
      {
        src: "picture_4.jpeg",
        srct: "picture_4.jpeg",
        title: "Title 14",
        description: "Description 14",
        ID: 200,
        albumID: "album_B",
      },
      {
        src: "picture_5.jpeg",
        srct: "picture_5.jpeg",
        title: "Title 15",
        description: "Description 15",
        ID: 201,
        albumID: "album_B",
      },
      {
        src: "picture_6.jpeg",
        srct: "picture_6.jpeg",
        title: "Title 16",
        description: "Description 16",
        ID: 202,
        albumID: "album_B",
      },
      {
        src: "picture_7.jpeg",
        srct: "picture_7.jpeg",
        title: "Title 17",
        description: "Description 17",
        ID: 203,
        albumID: "album_B",
      },
      {
        src: "picture_8.jpeg",
        srct: "picture_8.jpeg",
        title: "Title 18",
        description: "Description 18",
        ID: 204,
        albumID: "album_B",
      },
      {
        src: "picture_9.jpeg",
        srct: "picture_9.jpeg",
        title: "Title 19",
        description: "Description 19",
        ID: 205,
        albumID: "album_B",
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
    thumbnailAlignment: "center",
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
    thumbnailSelectable: true,              // enables selection mode
    thumbnailLevelUp: false,
    galleryDisplayMode: "pagination",
    galleryPaginationMode: "dots",
    galleryMaxRows: 2,
    galleryFilterTags: "title",
    galleryDisplayTransition: "rotateX",
    galleryDisplayTransitionDuration: 500,
    locationHash: true,
    touchAnimationL1: true,
    fnImgToolbarCustClick: delItem,
  });



  // tmp
  const albumId = "album_A";


  // retrieve selected items
  $nanogallery2.on("itemSelected.nanogallery2 itemUnSelected.nanogallery2", checkSelectedItems);


  $(".btn-go-to-previous-page").on("click", function() {});


  $(".btn-refresh-page").on("click", function() {});


  $(".btn-cancel").on("click", function() {
    nanogallery2Functions.selectNoneItem();
    changeHeaderToMenu();

    $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
    checkSelectedItems();
  });


  $(".btn-download-album").on("click", function() {
    // mandar para a API qual álbum que deseja baixar
    // a API deve retornar um ZIP para Download
  });


  $(".btn-delete-selected-media").on("click", function () {
    /* $nanogallery2.nanogallery2("data").items.forEach(function(item) {
      if (item.kind == "image") {
        item.delete();
      }
    }); */
    console.log("nanogallery2Functions.allSelectedMediaFromAlbum");
    console.log(nanogallery2Functions.allSelectedMediaFromAlbum(albumId));
    
    nanogallery2Functions.allSelectedMediaFromAlbum(albumId).forEach(item => {
      /*remove photo from:
        - data_folder
        - AWS
        - database
        - 
      */
      console.log(item.src);

      item.delete();
    });

    $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
    checkSelectedItems();

    $nanogallery2.nanogallery2("resize");
  });


  $(".btn-download-selected-media").on("click", function() {
    // mandar para a API quais fotos que deseja baixar
    // a API deve retornar um ZIP para Download
  });
  

  $(".btn-unselect-all-media").on("click", function() {
    nanogallery2Functions.selectNoneItem();

    $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
    checkSelectedItems();
  });


  $(".btn-select-all-media").on("click", function() {
    nanogallery2Functions.selectAllMediaFromAlbum(albumId);

    $nanogallery2.nanogallery2("data").gallery.nbSelected = nanogallery2Functions.countSelectedMediaFromAlbum(albumId);
    checkSelectedItems();

    $nanogallery2.nanogallery2("resize");
  });
  


  function checkSelectedItems() {
    const ngy2data = $nanogallery2.nanogallery2("data");
    console.log(ngy2data.gallery.nbSelected);

    if (ngy2data.gallery.nbSelected > 0) {
      changeHeaderToSelectionMenu();

      if (ngy2data.gallery.nbSelected == 1) {
        $("#nb_selected").text(`1 item selecionado`);
      } else {
        $("#nb_selected").text(`${ngy2data.gallery.nbSelected} itens selecionados`);
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
