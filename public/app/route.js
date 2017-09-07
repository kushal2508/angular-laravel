var app = angular.module('crudApp', ['ngRoute', 'ngResource', 'satellizer']);
app.config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider) {
	$routeProvider
	.when('/employee/create', {
		templateUrl: 'templates/create.html',
		controller: 'CreateEmployeeController'
	})
	.when('/employee/edit/:id', {
		templateUrl: 'templates/create.html',
		controller: 'CreateEmployeeController'
	})
	.when('/employee/showall', {
		templateUrl: 'templates/showall.html'
	})
	.when('/employee/login', {
		templateUrl: 'templates/login.html'
	})
	.when('/employee/register', {
		templateUrl: 'templates/register.html'
	});

	$authProvider.facebook({
		clientId: '1372760936176180',
		url: '/auth/facebook'
		// redirectUri: window.location.origin + '/'
	});

	$authProvider.google({
		clientId: '217083922083-mu0se3oc6vr98hpqf56ao1rhfrauuk8h.apps.googleusercontent.com',
		url: '/auth/google'
	});

	$authProvider.twitter({
		url: '/auth/twitter',
		authorizationEndpoint: 'https://api.twitter.com/oauth/authenticate',
		redirectUri: window.location.origin,
		oauthType: '1.0',
		popupOptions: { width: 495, height: 645 }
	});

	/*$authProvider.facebook({
		clientId: '1372760936176180',
		responseType: 'token',
		name: 'facebook',
		url: '/auth/facebook',
		authorizationEndpoint: 'https://www.facebook.com/v2.5/dialog/oauth',
		// redirectUri: window.location.origin + '/',
		redirectUri: window.location.origin + '/',
		requiredUrlParams: ['display', 'scope'],
		scope: ['email'],
		scopeDelimiter: ',',
		display: 'popup',
		oauthType: '2.0',
		popupOptions: { width: 580, height: 400 }
	});*/
}]);