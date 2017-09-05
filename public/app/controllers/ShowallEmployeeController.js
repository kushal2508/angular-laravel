app.controller('ShowallEmployeeController', ['$scope', '$http', function ($scope, $http) {

	$http.get("/api/employees")
	.then(
		function(records) {
			console.log("show all success");
			// console.log(records);
			$scope.records = records.data;
		}, function() {
			console.log("show all failure");
		});

	$scope.delete = function(id) {
		console.log("Delete ID: " + id);
		$http.delete("/api/employees/" + id)
		.then(
			function(records) {
				console.log("delete success");
				$scope.records = records.data;
			}, function() {
				console.log("delete failure");
			});
	}
}]);