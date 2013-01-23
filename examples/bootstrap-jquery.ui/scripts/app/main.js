define([
	"views/ApplicationView",
	"views/WindowContainerView",
	"views/TabIndexView",
	"views/SelectedTabView",
	"views/TabMenuView",
	"views/TabView",
	"controllers/ApplicationController",
	"controllers/tabListController",
	"app/router",
	"routes/IndexRoute",
	"routes/SelectedTabRoute",
	"scripts/fixtures/tabFixtures.js"
], function(ApplicationView, WindowContainerView, TabIndexView, SelectedTabView, TabMenuView, TabView, ApplicationController, tabListController, Router, IndexRoute, SelectedTabRoute, tabFixtures) {

	//setup
	tabListController.addTabs(tabFixtures.tabs);

	/*Module Pattern*/
	var App = {
		ApplicationView: ApplicationView,
		WindowContainerView: WindowContainerView,
		TabIndexView: TabIndexView,
		SelectedTabView: SelectedTabView,
		TabMenuView: TabMenuView,
		TabView: TabView,
		ApplicationController: ApplicationController,
		tabListController: tabListController,
		Router: Router,
		IndexRoute: IndexRoute,
		SelectedTabRoute: SelectedTabRoute
	};

	return App;
});