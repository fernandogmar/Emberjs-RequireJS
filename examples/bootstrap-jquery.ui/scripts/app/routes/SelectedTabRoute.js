/**
 * SelectedTabRoute
 * The SelectedTabRoute module.
 * @author 
 */
define([
		'ember',
		'controllers/tabListController'
	], function(
		Ember,
		tabListController
	) {
	"use strict";
	
	var SelectedTabRoute = Ember.Route.extend({
		model: function (params) {
			return tabListController.selectTab(params.tab);
		},
		setupController: function (seletedTabController, model) {
			//this.controllerFor('tabListController').set('selected', model);
		},
		renderTemplate: function() {
			this.render('selectedTab', {
				into: "application",
				controller: tabListController
			});
		}
	});

	return SelectedTabRoute;
});