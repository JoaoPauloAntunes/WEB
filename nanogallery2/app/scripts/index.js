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
        title: "Title 2 gjy tjyu yt jytj ytuj yukj yuk jyu kyu kyu sgdfgdfgdf gfd gdf gdf gdf gdfgd",             // media title
        description: "Description 2 dfhgfdhfgh fjfjjh gjgh jgh gh jg dsg dhg fdhg sgdsfgdfgdfgdfdgd", // media description
        ID: "picture_2.jpeg",
        albumID: "album_A",
      },
      {
        src: "picture_3.jpeg",
        srct: "picture_3.jpeg",
        title: "Title 3",
        description: "Description 3",
        ID: "picture_3.jpeg",
        albumID: "album_A",
      },
      {
        src: "picture_4.jpeg",
        srct: "picture_4.jpeg",
        title: "Title 4",
        description: "Description 4",
        ID: "picture_4.jpeg",
        albumID: "album_A",
      },
      {
        src: "picture_5.jpeg",
        srct: "picture_5.jpeg",
        title: "Title 5",
        description: "Description 5",
        ID: "picture_5.jpeg",
        albumID: "album_A",
      },
      {
        src: "picture_6.jpeg",
        srct: "picture_6.jpeg",
        title: "Title 6",
        description: "Description 6",
        ID: "picture_6.jpeg",
        albumID: "album_A",
      },
      {
        src: "picture_7.jpeg",
        srct: "picture_7.jpeg",
        title: "Title 7",
        description: "Description 7",
        ID: "picture_7.jpeg",
        albumID: "album_A",
      },
      {
        src: "picture_8.jpeg",
        srct: "picture_8.jpeg",
        title: "Title 8",
        description: "Description 8",
        ID: "picture_8.jpeg",
        albumID: "album_A",
      },
      {
        src: "picture_9.jpeg",
        srct: "picture_9.jpeg",
        title: "Title 9",
        description: "Description 9",
        ID: "picture_9.jpeg",
        albumID: "album_A",
      },
      {
        src: "picture_10.jpeg",
        srct: "picture_10.jpeg",
        title: "Title 10",
        description: "Description 10",
        ID: "picture_10.jpeg",
        albumID: "album_A",
      },
      //////////////////////////////////////////////////////////////////////////
      // album 2
      { src: "picture_11.jpeg", title: "album B", ID: "album_B", kind: "album" },
      { src: "picture_11.jpeg", srct: "picture_11.jpeg", title: "Title 11", description: "Description 11", ID: "picture_11.jpeg", albumID: "album_B" },
      { src: "picture_12.jpeg", srct: "picture_12.jpeg", title: "Title 12", description: "Description 12", ID: "picture_12.jpeg", albumID: "album_B" },
      { src: "picture_13.jpeg", srct: "picture_13.jpeg", title: "Title 13", description: "Description 13", ID: "picture_13.jpeg", albumID: "album_B" },
      { src: "picture_14.jpeg", srct: "picture_14.jpeg", title: "Title 14", description: "Description 14", ID: "picture_14.jpeg", albumID: "album_B" },
      { src: "picture_15.jpeg", srct: "picture_15.jpeg", title: "Title 15", description: "Description 15", ID: "picture_15.jpeg", albumID: "album_B" },
    ],
    thumbnailWidth: "auto",
    thumbnailHeight: "220",
    thumbnailBorderVertical: 3,
    thumbnailBorderHorizontal: 3,
    thumbnailLabel: {
      position: "overImageOnBottom",
      display: true,                // default: true
      hideIcons: false,             // default: true
      titleMultiLine: false,        // default: false
      titleMaxLength: 50,           // default: 0 (Title maximum length to display)
      titleFontSize: "0.8em",       // default: 1em
      displayDescription: true,     // default: false
      descriptionMultiLine: false,  // default: false
      descriptionMaxLength: 57,     // default: 0 (Title maximum length to display)
      descriptionFontSize: "0.7em", // default: "0.8em"
    },
    thumbnailAlignment: "center",
    thumbnailLevelUp: false,        // default: false (it's ugly and strange)
    thumbnailOpenImage: true,
    thumbnailDisplayTransition: "scaleUp",
    thumbnailDisplayTransitionDuration: 500,
    thumbnailDisplayInterval: 30,
    thumbnailHoverEffect2: "borderLighter",
    thumbnailSelectable: true,              // enables selection mode
    viewerToolbar: {
      display: true,                        // default: false
      standard: "label",
      // minimized: "label",
    },
    viewerTools: {
      topLeft: "pageCounter, playPauseButton, infoButton",
      topRight:
      "zoomButton, rotateLeft, rotateRight, custom1, downloadButton, fullscreenButton, closeButton",
    },
    viewerTheme: "dark",                    // default: dark (can be: 'dark', 'light', 'border')
    viewerImageDisplay: "bestImageQuality", // can be: 'bestImageQuality', 'upscale'
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
    galleryDisplayMode: "pagination",
    galleryPaginationMode: "dots",
    galleryMaxRows: 2,
    galleryFilterTags: "title",
    galleryDisplayTransition: "rotateX",
    galleryDisplayTransitionDuration: 500,
    fnImgToolbarCustClick: deleteMedia,
    locationHash: true,                     // default: true (in this application, must be true, as it is used as a location reference in the gallery)
    allowHTMLinData: false,                 // default: false (false for security: could lead to XSS (cross site scripting) vulnerability)
  });



  const $baseMenu = $("#base_menu");
  const $menu = $("#menu");
  const $selectionMenu = $("#selection_menu");

  const trashCart = "custom1";
  const baseAlbumId = "0";                  // "0" is the album entitled "Galleries", the base album 
  let currentAlbumId = baseAlbumId;


  $nanogallery2.on("itemSelected.nanogallery2", event => {
    /* doesn't work as expected!
    if (currentAlbumId == baseAlbumId) {
        nanogallery2Functions.selectNoneItem();
    } else {
      checkSelectedItems();
    } */
    checkSelectedItems();
  });


  $nanogallery2.on("itemUnSelected.nanogallery2", checkSelectedItems);

  
  /* $nanogallery2.on("pageChanged.nanogallery2", function(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }) */
  /* $nanogallery2.on("galleryRenderStart.nanogallery2 galleryRenderEnd.nanogallery2 galleryObjectModelBuilt.nanogallery2 galleryLayoutApplied.nanogallery2 galleryDisplayed.nanogallery2", function(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
  }); */

  $nanogallery2.on("galleryDisplayed.nanogallery2", function(event) {
    const splitCurrentUrl = window.location.href.split("/");
    const lastIndex = splitCurrentUrl.length - 1;
    const albumId = splitCurrentUrl[lastIndex];

    currentAlbumId = (albumId == "" ? baseAlbumId : albumId);
    if (currentAlbumId == baseAlbumId) {
      changeHeaderToBaseMenu();
    } else {
      changeHeaderToMenu();
    }
  });


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
    console.log(nanogallery2Functions.allSelectedMediaFromAlbum(currentAlbumId));
    
    nanogallery2Functions.allSelectedMediaFromAlbum(currentAlbumId).forEach(item => {
      /*remove photo from:
        - data_folder
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
    nanogallery2Functions.selectAllMediaFromAlbum(currentAlbumId);

    $nanogallery2.nanogallery2("data").gallery.nbSelected = nanogallery2Functions.countSelectedMediaFromAlbum(currentAlbumId);
    checkSelectedItems();

    $nanogallery2.nanogallery2("resize");
  });
  


  function checkSelectedItems() {
    const ngy2data = $nanogallery2.nanogallery2("data");
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

  
  function changeHeaderToBaseMenu() {
    $baseMenu.removeClass("d-none");
    $menu.addClass("d-none");  
    $selectionMenu.addClass("d-none");
  }

  
  function changeHeaderToMenu() {
    if (currentAlbumId != baseAlbumId) {
      $baseMenu.addClass("d-none");
      $menu.removeClass("d-none");  
      $selectionMenu.addClass("d-none");
    }
  }
  
  
  function changeHeaderToSelectionMenu() {
    if (currentAlbumId != baseAlbumId) {
      $baseMenu.addClass("d-none");
      $menu.addClass("d-none");  
      $selectionMenu.removeClass("d-none");
    }
  }


  function deleteMedia(customElementName, $customIcon, media) {
    console.log("deleteMedia");
    console.log(customElementName);
    console.log($customIcon);
    console.log(media);
    console.log(media.GetID());
    console.log(media.src);

    if (customElementName == trashCart) {
      nanogallery2Functions.allSelectedMediaFromAlbum(currentAlbumId).forEach(item => {
        /*remove photo from:
          - data_folder
        */
        console.log(item.src);
  
        item.delete();
      });
  
      $nanogallery2.nanogallery2("data").gallery.nbSelected = 0;
      checkSelectedItems();
  
      $nanogallery2.nanogallery2("resize");
    }
  }
});
