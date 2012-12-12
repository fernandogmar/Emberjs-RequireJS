define([
  "ember",
  "controllers/tabListController",
  "text!templates/tabMenuItemTemplate.html"
], function(Em, tabListController, tabMenuItemTemplate){
  var TabMenuItemView =  Em.View.extend({
      tagName: 'li',
      template: Ember.Handlebars.compile(tabMenuItemTemplate),
      controller: tabListController,
      classNameBindings: ['selected'],
      selected: function(){
            if(this.get('content') === this.get("controller.selected") ){
                return 'active';
            }
      }.property("controller.selected").cacheable(),
      click: function(e){
        e.preventDefault();
        tabListController.showTab(this.get('content'));  
      }
  });
  
  return TabMenuItemView;
});
