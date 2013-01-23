define({
	app_name: "MyExampleApp",
	shim: {
		'ember': {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
		'jquery.ui': ['jquery']
	},
	paths: {
		'App': 'app/main',
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
		'templates': 'app/templates',
		'routes': 'app/routes',
		/*libs*/
		'jquery': 'libs/jquery/1.9.0/jquery',
		'handlebars': 'libs/handlebars/1.0.rc.1/handlebars',
		'ember': 'libs/ember/1.0.0-pre.4/ember',
		'jquery.ui': 'libs/jquery.ui/1.9.2/jquery-ui-1.9.2.custom.min',
		'bootstrap': 'libs/bootstrap/2.2.2/js/boostrap',
		/*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'hbs': 'libs/requirejs-plugins/hbs',
		'domReady': 'libs/requirejs-plugins/domReady'
	},
	/*hbs plugin options*/
	hbs: {
		disableI18n: true,
		templateExtension: "html"
	}
});