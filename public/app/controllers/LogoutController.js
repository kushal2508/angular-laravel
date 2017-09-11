app.controller('LogoutController', ['$scope', '$http', '$routeParams', '$location', 'tokenProp', '$auth',
	function ($scope, $http, $routeParams, $location, tokenProp, $auth) {

		localStorage.setItem('loginauth', false);
		tokenProp.setToken('');
		$location.path('/employee/login');
}]);