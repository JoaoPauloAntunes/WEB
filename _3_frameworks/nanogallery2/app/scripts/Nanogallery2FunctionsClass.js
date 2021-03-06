class Nanogallery2Functions {
    constructor($nanogallery2) {
      this.$nanogallery2 = $nanogallery2;
      this.items = this.$nanogallery2.nanogallery2("data").items.slice();
      this.itemsLength = this.items.length;
    }
    mediaItemKind = "image";      //  "image": for media (image or video)
    albumItemKind = "album";


    allItems = function() {
      const nanogallery2Items = this.$nanogallery2.nanogallery2("data").items;
      if (nanogallery2Items.length > this.itemsLength) {
        this.items = nanogallery2Items;
        console.error("Nanogallery2Functions.allItems: items were overwritten by nanogallery2Items because the size of nanogallery2Items has increased!");
      }

      return this.items;
    };


    deleteItem = function(targetItem) {
      this.items.forEach((item, index) => {
        const itemId = item.GetID();
        const targetItemId = targetItem.GetID();
        if (itemId == targetItemId) {
          this.items.splice(index, 1);
        }
      }); 

      targetItem.delete();
    }


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