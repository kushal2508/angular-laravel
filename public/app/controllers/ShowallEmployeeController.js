app.controller('ShowallEmployeeController', ['$scope', '$http', function ($scope, $http) {

	$http.get("/employee/getallemployees")
	.then(
		function(records) {
			console.log("success");
			console.log(records);
			$scope.records = records.data;
		}, function() {
			console.log("failure");
		});
}]);