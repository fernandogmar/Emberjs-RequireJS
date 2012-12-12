define([
  "ember",
  "controllers/tabListController"
], function(Ember, tabListController){

  var Router = Ember.Router.extend({
    root : Ember.Route.extend({
      index : Ember.Route.extend({
        route : '/',
        connectOutlets : function(router, context) {
          tabListController.showFirstTab();
          return router.get('applicationController').connectOutlet('selectedTab');
        }
      }),
      site_page : Em.Route.extend({
        route : '/:tab',
        connectOutlets : function(router, context) {
          tabListController.selectTab(context.tab);
          return router.get('applicationController').connectOutlet('selectedTab');
        }
      })
    })
  }); 


	return Router;
});
