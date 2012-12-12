define([
	"ember",
	"text!templates/applicationTemplate.html"
], function(Ember, applicationTemplate){
	var ApplicationView = Ember.View.extend({
	  template: Ember.Handlebars.compile(applicationTemplate)
	});
	return ApplicationView;
});
