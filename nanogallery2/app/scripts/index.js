$(() => {
  $("#nanogallery2").nanogallery2({
    "itemsBaseURL":    '/app/images/',
    "items":[
      { 
        "src": "picture_2.jpeg",          // image url
        "srct": "picture_2.jpeg",         // thumbnail url
        "title": "Title 2",               // media title
        "description": "Description 2",   // media description
      },
      { "src": "picture_3.jpeg", "srct": "picture_3.jpeg", "title": "Title 3", "description": "Description 3" },
      { "src": "picture_4.jpeg", "srct": "picture_4.jpeg", "title": "Title 4", "description": "Description 4" },
      { "src": "picture_5.jpeg", "srct": "picture_5.jpeg", "title": "Title 5", "description": "Description 5" },
      { "src": "picture_6.jpeg", "srct": "picture_6.jpeg", "title": "Title 6", "description": "Description 6" },
      { "src": "picture_7.jpeg", "srct": "picture_7.jpeg", "title": "Title 7", "description": "Description 7" },
      { "src": "picture_8.jpeg", "srct": "picture_8.jpeg", "title": "Title 8", "description": "Description 8" },
      { "src": "picture_9.jpeg", "srct": "picture_9.jpeg", "title": "Title 9", "description": "Description 9" },
      { "src": "picture_10.jpeg", "srct": "picture_10.jpeg", "title": "Title 10", "description": "Description 10" },
      { "src": "picture_11.jpeg", "srct": "picture_11.jpeg", "title": "Title 11", "description": "Description 11" },
      { "src": "picture_12.jpeg", "srct": "picture_12.jpeg", "title": "Title 12", "description": "Description 12" },
      { "src": "picture_13.jpeg", "srct": "picture_13.jpeg", "title": "Title 13", "description": "Description 13" },
      { "src": "picture_14.jpeg", "srct": "picture_14.jpeg", "title": "Title 14", "description": "Description 14" },
      { "src": "picture_15.jpeg", "srct": "picture_15.jpeg", "title": "Title 15", "description": "Description 15" },
      { "src": "picture_3.jpeg", "srct": "picture_3.jpeg", "title": "Title 3", "description": "Description 3" },
      { "src": "picture_4.jpeg", "srct": "picture_4.jpeg", "title": "Title 4", "description": "Description 4" },
      { "src": "picture_5.jpeg", "srct": "picture_5.jpeg", "title": "Title 5", "description": "Description 5" },
      { "src": "picture_6.jpeg", "srct": "picture_6.jpeg", "title": "Title 6", "description": "Description 6" },
      { "src": "picture_7.jpeg", "srct": "picture_7.jpeg", "title": "Title 7", "description": "Description 7" },
      { "src": "picture_8.jpeg", "srct": "picture_8.jpeg", "title": "Title 8", "description": "Description 8" },
      { "src": "picture_9.jpeg", "srct": "picture_9.jpeg", "title": "Title 9", "description": "Description 9" },
      { "src": "picture_10.jpeg", "srct": "picture_10.jpeg", "title": "Title 10", "description": "Description 10" },
      { "src": "picture_11.jpeg", "srct": "picture_11.jpeg", "title": "Title 11", "description": "Description 11" },
      { "src": "picture_12.jpeg", "srct": "picture_12.jpeg", "title": "Title 12", "description": "Description 12" },
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