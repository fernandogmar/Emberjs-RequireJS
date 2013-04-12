define({
	app_name: "MyExampleApp", 
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		}
	},
	paths : {
		'App': 'app/main',		
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    	'templates': 'app/templates',
		/*libs*/
		'jquery': 'libs/jquery/1.9.1/jquery',
		'handlebars': 'libs/handlebars/1.0.rc.3/handlebars',
		'ember': 'libs/ember/1.0.0-rc.2/ember',
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

