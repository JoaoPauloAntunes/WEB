class Nanogallery2Functions {
    constructor($nanogallery2) {
      this.$nanogallery2 = $nanogallery2;
    }
    mediaItemKind = "image" //  "image": for media (image or video)
    albumItemKind = "album"


    allItems = function() {
      return this.$nanogallery2.nanogallery2('data').items;
    };


    allSelectedItems = function() {
      return this.$nanogallery2.nanogallery2('itemsSelectedGet');
    };
    

    allUnSelectedItems = function() {
      return this.allItems().filter(function(el) {
        return !el.selected;
      });
    };

    
    allSelectedNodeIds = function() {
      var nodeIds = [];
      this.allSelectedItems().forEach(function(e, i) {
        if (!((typeof e.customData) == "string") || e.customData == "") {
          console.log("No custom data detected! Skipping");
          console.log(e);
        } else {
          nodeIds.push(e.customData);
        }
      });
      console.log(nodeIds);
      return nodeIds;
    }

    
    invertSelection = function() {
      this.$nanogallery2.nanogallery2('itemsSetSelectValue', this.allSelectedItems(), false);
      this.$nanogallery2.nanogallery2('itemsSetSelectValue', this.allUnSelectedItems(), false);
    };

    
    selectAllItems = function() {
      this.$nanogallery2.nanogallery2('itemsSetSelectedValue', this.allUnSelectedItems(), true);
    };

    
    selectNoneItem = function() {
      this.$nanogallery2.nanogallery2('itemsSetSelectedValue', this.allSelectedItems(), false);
    };

    
    countSelectedItems = function() {
      return this.allSelectedItems().length;
    }



    allMediaFromAlbum = function(albumId) {
      return this.allItems().filter(item => item.kind == this.mediaItemKind && item.albumID == albumId);
    };


    allSelectedMediaFromAlbum = function(albumId) {
      return this.allSelectedItems().filter(item => item.kind == this.mediaItemKind && item.albumID == albumId);
    };


    allUnSelectedMediaFromAlbum = function(albumId) {
      return this.allMediaFromAlbum(albumId).filter(function(el) {
        return !el.selected;
      });
    };


    selectAllMediaFromAlbum = function(albumId) {
      this.$nanogallery2.nanogallery2('itemsSetSelectedValue', this.allUnSelectedMediaFromAlbum(albumId), true);
    };

    
    countSelectedMediaFromAlbum = function(albumId) {
      return this.allSelectedMediaFromAlbum(albumId).length;
    }
}