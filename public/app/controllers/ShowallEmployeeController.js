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

	/*$scope.destroy = function (id) {
		console.log("delete function entered");
		console.log('id: ' + id);
		Emp.remove({empID: id});*/


		// dataFactory.deleteEmployee(index);
		/*.then(function(data) {
			console.log("delete success");
		});*/
	// }

	/*$scope.remove = function(item,index){
		var result = confirm("Are you sure delete this item?");
		if (result) {
			dataFactory.httpRequest('items/'+item.id,'DELETE').then(function(data) {
				$scope.data.splice(index,1);
			});
		}
	}*/
}]);