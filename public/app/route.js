var app = angular.module('crudApp', ['ngRoute', 'ngResource']);
app.config(['$routeProvider', function($routeProvider) {
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
}]);