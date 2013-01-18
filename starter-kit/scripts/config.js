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
		'jquery': 'libs/jquery/1.9.0/jquery',
		'handlebars': 'libs/handlebars/1.0.rc.1/handlebars',
		'ember': 'libs/ember/1.0.0-pre.4/ember',
		/*requirejs-plugins*/
		'text': 'libs/requirejs-plugins/text',
		'domReady': 'libs/requirejs-plugins/domReady'
	}
}); 

