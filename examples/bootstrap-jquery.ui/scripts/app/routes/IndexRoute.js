define([
		'ember',
		'controllers/tabListController'
	], function(
		Ember,
		tabListController
	) {
	"use strict";
	
	var IndexRoute = Ember.Route.extend({
		setupController: function (indexController, model) {
			tabListController.showFirstTab();
		},
		renderTemplate: function() {		
			this.render('selectedTab', {
				into: "application",
				controller: tabListController
			});
		}
	});

	return IndexRoute;
});