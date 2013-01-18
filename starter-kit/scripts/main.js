(function(root){
	require(["config"], function(config){
		requirejs.config(config);
		require(["App", "domReady!", "ember"], function(App, doc, Ember){
			var app_name = config.app_name || "App";
			root[app_name] = App = Ember.Application.createWithMixins(App);
		});
	});
})(this);

