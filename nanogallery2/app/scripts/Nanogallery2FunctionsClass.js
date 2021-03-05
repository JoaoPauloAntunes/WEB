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
    
    selectAll = function() {
      this.$nanogallery2.nanogallery2('itemsSetSelectedValue', this.allUnSelectedItems(), true);
    };
    
    selectNone = function() {
      this.$nanogallery2.nanogallery2('itemsSetSelectedValue', this.allSelectedItems(), false);
    };
    
    countSelectedItems = function() {
      return this.allSelectedItems().length;
    }
}