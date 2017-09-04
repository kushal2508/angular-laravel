var app = angular.module('crudApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/employee/create', {
		templateUrl: 'templates/create.html',
		controller: 'CreateEmployeeController'
	})
	.when('/employee/showall', {
		templateUrl: 'templates/showall.html'
		/*,
		controller: 'ShowallEmployeeController'*/
	});
}]);