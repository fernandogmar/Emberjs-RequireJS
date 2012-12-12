define([
  "require",
  "ember",
  "controllers/tabListController"
], function(require, Ember, tabListController){
  var TabModel = Ember.Object.extend({
    title: null,
    content: null,
    order: null,
    init: function(){
      this._super();
      tabListController = require("controllers/tabListController");//due to circular dependency
      this.notifyPropertyChange("name");
    },
    onChangeName: function(key, value){
      var slug = tabListController.createUniqueSlug(this.get("name"));
      if(slug){
        this.set("slug", slug);
      }
    }.observes("name"),
    link: function(){
      var slug = this.get("slug");
      
      if(slug){
        return "#/" + slug;
      } else {
        return slug;
      }
      
    }.property("slug")
  });
  
  return TabModel;
});