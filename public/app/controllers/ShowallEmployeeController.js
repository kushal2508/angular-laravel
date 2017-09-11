app.controller('ShowallEmployeeController', ['$scope', '$http', 'tokenProp', function ($scope, $http, tokenProp) {
	console.log("Token is: " + tokenProp.getToken());
	$http.defaults.headers.common.Authorization = 'Bearer ' + tokenProp.getToken();

	if (localStorage.getItem('loginauth') == 'false'){
		$scope.auth = false;
	}
	else{
		$scope.auth = true;
	}

	$http.get("/api/employees", {
		headers: {
			"Authorization": 'Bearer ' + tokenProp.getToken()
		}
	})
	.then(
		function(records) {
			console.log("show all success");
			$scope.records = records.data;
		}, function(records) {
			console.log("show all failure");
			console.log(records);
		});

	$scope.delete = function(id) {
		console.log("Delete ID: " + id);
		$http.delete("/api/employees/" + id, {
			headers: {
				"Authorization": 'Bearer ' + tokenProp.getToken()
			}
		})
		.then(
			function(records) {
				console.log("delete success");
				$scope.records = records.data;
			}, function() {
				console.log("delete failure");
			});
	}
}]);