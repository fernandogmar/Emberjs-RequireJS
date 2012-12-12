define([
  "ember",
  "controllers/tabListController",
  "text!templates/tabCreationTemplate.html"
], function(Em, tabListController, tabCreationTemplate){
  
  var TabCreationView = Em.View.extend({
      content: null,
      controller: tabListController,
      template: tabCreationTemplate
  });
  
  return TabCreationView;
});