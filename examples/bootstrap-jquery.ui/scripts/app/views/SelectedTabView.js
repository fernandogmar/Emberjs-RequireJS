define([
  "ember",
  "controllers/tabListController",
  "text!templates/selectedTabTemplate.html"
], function(Ember, tabListController, selectedTabTemplate){

  Ember.TEMPLATES["selectedTab"] = Ember.Handlebars.compile(selectedTabTemplate);

  var SelectedTabView = Ember.View.extend({
    classNames: ["hero-unit"],
    templateName: "selectedTab",
    controller: tabListController,
    contentBinding: "controller.selected"
  });
  return SelectedTabView;
});
