define([
  "ember",
  "controllers/tabListController",
  "text!templates/selectedTabTemplate.html"
], function(Ember, tabListController, selectedTabTemplate){
  var SelectedTabView = Ember.View.extend({
    classNames: ["hero-unit"],
    template: Ember.Handlebars.compile(selectedTabTemplate),
    controller: tabListController,
    contentBinding: "controller.selected"
  });
  return SelectedTabView;
});
