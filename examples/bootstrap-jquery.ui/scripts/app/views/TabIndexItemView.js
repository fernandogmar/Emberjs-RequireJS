define([
  "ember",
  "controllers/tabListController",
  "text!templates/tabIndexItemTemplate.html"
], function(Em, tabListController, tabIndexItemTemplate){
  
  var TabIndexItemView = Em.View.extend({
      tagName: 'li',
      content: null,
      controller: tabListController,
      template: Ember.Handlebars.compile(tabIndexItemTemplate),
      classNameBindings: ['selected'],
      classNames: ["tab-index-item"],
      selected: function(){
          if(this.get('content') === this.get("controller.selected") ){
              return 'active';
          }
      }.property("controller.selected").cacheable(),
      removeTab: function(e){
        e.preventDefault();
        var tab = this.get("content");
        var controller = this.get("controller");
        
        controller.removeTab(tab);
      },
      toggleEditing: function(){
        this.set('editing', !this.get('editing'));
      },
      changeTitle: function(){
        var new_name = this.$("input").val();
        this.set("content.name", new_name);
        this.set('editing', false);
      },
      onChangeEditing: function(){
        if(this.get("editing")){
          Em.run.end();
          this.$("input").focus();
        }
      }.observes("editing"),
      updateListPosition: function(position){
        this.set("content.order", position);
      },
      submit: function(e){
        e.preventDefault();
      }
  });
  
  return TabIndexItemView;
});