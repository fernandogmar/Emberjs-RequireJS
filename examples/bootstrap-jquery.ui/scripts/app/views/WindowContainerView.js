define([
  "ember",
  "text!templates/windowContainerTemplate.html",
  "jquery.ui"
], function(Ember, windowContainerTemplate){
  var WindowContainerView = Ember.View.extend({
    classNames: ["window-container"],
    template: Ember.Handlebars.compile(windowContainerTemplate),
    didInsertElement: function(){

      this.$().draggable({
        cancel : ".content",
        cursor : "move",
        containment : "body",
        scroll : true,
        scrollSensitivity : 100
      });

    }
  });
  return WindowContainerView;
});
