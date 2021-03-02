$(() => {
  $("#nanogallery2").nanogallery2({
    "itemsBaseURL":    '/app/images/',
    "items":[
      { 
        "src": "picture_2.jpeg",          // image url
        "title": "Album A",               // media title
        "ID": 1,
        "kind": "album",
      },
      { 
        "src": "picture_2.jpeg",          // image url
        "srct": "picture_2.jpeg",         // thumbnail url
        "title": "Title 2",               // media title
        "description": "Description 2",   // media description
        "ID": 10,
        "albumID": 1,
      },
      // album 1
      { "src": "picture_3.jpeg", "srct": "picture_3.jpeg", "title": "Title 3", "description": "Description 3", "ID": 3, "albumID": 1 },
      { "src": "picture_4.jpeg", "srct": "picture_4.jpeg", "title": "Title 4", "description": "Description 4", "ID": 4, "albumID": 1 },
      { "src": "picture_5.jpeg", "srct": "picture_5.jpeg", "title": "Title 5", "description": "Description 5", "ID": 5, "albumID": 1 },
      { "src": "picture_6.jpeg", "srct": "picture_6.jpeg", "title": "Title 6", "description": "Description 6", "ID": 6, "albumID": 1 },
      { "src": "picture_7.jpeg", "srct": "picture_7.jpeg", "title": "Title 7", "description": "Description 7", "ID": 7, "albumID": 1 },
      { "src": "picture_8.jpeg", "srct": "picture_8.jpeg", "title": "Title 8", "description": "Description 8", "ID": 8, "albumID": 1 },
      { "src": "picture_9.jpeg", "srct": "picture_9.jpeg", "title": "Title 9", "description": "Description 9", "ID": 9, "albumID": 1 },
      { "src": "picture_10.jpeg", "srct": "picture_10.jpeg", "title": "Title 10", "description": "Description 10", "ID": 10, "albumID": 1 },
      { "src": "picture_11.jpeg", "srct": "picture_11.jpeg", "title": "Title 11", "description": "Description 11", "ID": 11, "albumID": 1 },
      { "src": "picture_12.jpeg", "srct": "picture_12.jpeg", "title": "Title 12", "description": "Description 12", "ID": 12, "albumID": 1 },
      { "src": "picture_13.jpeg", "srct": "picture_13.jpeg", "title": "Title 13", "description": "Description 13", "ID": 13, "albumID": 1 },
      { "src": "picture_14.jpeg", "srct": "picture_14.jpeg", "title": "Title 14", "description": "Description 14", "ID": 14, "albumID": 1 },
      { "src": "picture_15.jpeg", "srct": "picture_15.jpeg", "title": "Title 15", "description": "Description 15", "ID": 15, "albumID": 1 },
      // album 2
      { "src": "picture_3.jpeg", "title": "album B", "ID": 2, "kind": "album" },
      { "src": "picture_3.jpeg", "srct": "picture_3.jpeg", "title": "Title 13", "description": "Description 13", "ID": 23, "albumID": 2  },
      { "src": "picture_4.jpeg", "srct": "picture_4.jpeg", "title": "Title 14", "description": "Description 14", "ID": 24, "albumID": 2  },
      { "src": "picture_5.jpeg", "srct": "picture_5.jpeg", "title": "Title 15", "description": "Description 15", "ID": 25, "albumID": 2  },
      { "src": "picture_6.jpeg", "srct": "picture_6.jpeg", "title": "Title 16", "description": "Description 16", "ID": 26, "albumID": 2  },
      { "src": "picture_7.jpeg", "srct": "picture_7.jpeg", "title": "Title 17", "description": "Description 17", "ID": 27, "albumID": 2  },
      { "src": "picture_8.jpeg", "srct": "picture_8.jpeg", "title": "Title 18", "description": "Description 18", "ID": 28, "albumID": 2  },
      { "src": "picture_9.jpeg", "srct": "picture_9.jpeg", "title": "Title 19", "description": "Description 19", "ID": 29, "albumID": 2  },
    ],
    "thumbnailWidth": "auto",
    "thumbnailHeight": "250",
    "thumbnailBorderVertical": 1,
    "thumbnailBorderHorizontal": 1,
    "thumbnailLabel": {
      "position": "overImageOnBottom",
      "titleMultiLine": true,
      "displayDescription": true,
      "descriptionMultiLine": true
    },
    "allowHTMLinData": true,
    "galleryDisplayMode": "pagination",
    "galleryMaxRows": 2,
    "galleryPaginationMode": "dots",
    "thumbnailAlignment": "center",
    "galleryFilterTags": "title",
    "thumbnailLevelUp": true,
    "thumbnailOpenImage": true,
    "viewerToolbar":    {
      "display":    true,
      "standard":  "label",
      "minimized": "label"
    },
    "viewerTools":      {
      "topLeft":   "infoButton, pageCounter, custom1",
      "topRight":  "playPauseButton, zoomButton, downloadButton, fullscreenButton, closeButton" 
    },
    "viewerTheme": "dark",
    "viewerImageDisplay": "bestImageQuality"
  });
});