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

    /*$authProvider.oauth2({
      name: 'foursquare',
      url: '/auth/foursquare',
      clientId: 'Foursquare Client ID',
      redirectUri: window.location.origin,
      authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
  });*/
}]);