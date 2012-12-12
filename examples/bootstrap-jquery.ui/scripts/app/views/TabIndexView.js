define([
  "ember",
  "controllers/tabListController",
  "views/TabIndexItemView"
], function(Ember, tabListController, TabIndexItemView){
  var TabIndexView = Ember.CollectionView.extend({
    tagName: "ul",
    classNames: ["nav", "nav-list"],
    controller: tabListController,
    contentBinding: "controller.tabs",
    itemViewClass: TabIndexItemView,
    didInsertElement: function() {
      var self = this;
      
      this.$().sortable({
        axis: 'y',
        update: function(event, ui) {
          var rows = self.$('li').toArray();
          rows.forEach(function(row, position) {
            var view = Ember.View.views[$(row).attr('id')];
            view.updateListPosition(position);
          });
        }
      });
     }
  });
  
  return TabIndexView;
});