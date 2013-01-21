define([
	"views/ApplicationView",
	"controllers/ApplicationController",
	"app/router"
], function(ApplicationView, ApplicationController, Router){
	/*Module Pattern*/
	var App = {
		ApplicationView: ApplicationView,
		ApplicationController: ApplicationController,
		Router: Router
	};

	return App;
});
