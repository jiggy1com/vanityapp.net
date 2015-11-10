'use strict';

// declare app
var app = angular.module('app', ['ngRoute',

	// all my modules
	'app.template',
	'app.offcanvasnav',
	'app.nav',
	'app.footer',
	'app.home',
	'app.web',
	'app.print',
	'app.video',
	'app.social',

	// directives
	'app.contactgroup',
	'app.flexslider',
	'app.youtubeiframe',

	// services

	// filters
	'app.stringFilters'

]);

// config
app.config(function($routeProvider, $locationProvider, $sceDelegateProvider){

	// WHITELIST domains
	$sceDelegateProvider.resourceUrlWhitelist([
		// Allow same origin resource loads.
		'self',
		// Allow loading from our assets domain.  Notice the difference between * and **.
		'http://www.youtube.com/**'
	]);

	// BLACKLIST domains
	// The blacklist overrides the whitelist so the open redirect here is blocked.
	$sceDelegateProvider.resourceUrlBlacklist([
		'http://myapp.example.com/clickThru**'
	]);

	// routes
	$routeProvider
	.when('/', {
		controller : 'homeController',
		templateUrl : '/components/home/homeView.htm'
	})
	.when('/template', {
		controller : 'templateController',
		templateUrl : '/components/_template/templateView.htm'
	})
	.when('/web', {
		controller : 'webController',
		templateUrl : '/components/web/webView.htm'
	})
	.when('/print', {
		controller : 'printController',
		templateUrl : '/components/print/printView.htm'
	})
	.when('/video', {
		controller : 'videoController',
		templateUrl : '/components/video/videoView.htm'
	})
	.when('/social', {
		controller : 'socialController',
		templateUrl : '/components/social/socialView.htm'
	})
	.otherwise({redirectTo : '/'});

	// allow for URLs without #! (requires .htaccess file to rewrite URLs)
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	});
	
});

app.run(function($rootScope){

	$rootScope.contactData = {
		phone 	: '909-224-0798',
		mobile 	: '909-224-0798',
		email 	: 'pedro@madwebdesigns.net '
	}

	// static meta data
	$rootScope.meta = {};
	$rootScope.meta.title = "VanityApp.net";
});