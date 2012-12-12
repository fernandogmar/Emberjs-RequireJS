define({
	app_name: "MyExampleApp", 
	shim : {
		'ember' : {
			deps: ['handlebars', 'jquery'],
			exports: 'Ember'
		},
    'jquery.ui': ['jquery']
	},
	paths : {
		'App': 'app/main',		
		'models': 'app/models',
		'views': 'app/views',
		'controllers': 'app/controllers',
    'templates': 'app/templates',
		/*libs*/
		'jquery': 'libs/jquery/1.8.3/jquery',
		'handlebars': 'libs/handlebars/1.0.rc.1/handlebars',
		'ember': 'libs/ember/1.0.0-pre2.1/ember',
    'jquery.ui': 'libs/jquery.ui/1.9.2/jquery-ui-1.9.2.custom.min',
    'bootstrap': 'libs/bootstrap/2.2.2/js/boostrap'
	}
}); 

