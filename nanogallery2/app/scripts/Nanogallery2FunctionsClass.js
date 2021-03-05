class Nanogallery2Functions {
    constructor($nanogallery2) {
      this.$nanogallery2 = $nanogallery2;
    }


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



    allImages = function() {
      return this.allItems().filter(item => item.kind == "image");
    };


    allSelectedImages = function() {
      return this.allSelectedItems().filter(item => item.kind == "image");
    };


    allUnSelectedImages = function() {
      return this.allImages().filter(function(el) {
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



    selectAllImages = function() {
      this.$nanogallery2.nanogallery2('itemsSetSelectedValue', this.allUnSelectedImages(), true);
    };

    
    countSelectedImages = function() {
      console.log(this.allSelectedImages());
      return this.allSelectedImages().length;
    }
}