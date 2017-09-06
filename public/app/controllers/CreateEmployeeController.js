app.controller('CreateEmployeeController', ['$scope', '$http', '$routeParams', '$location', 'tokenProp',
	function ($scope, $http, $routeParams, $location, tokenProp) {
		$scope.title = "Registration Form";
		$scope.phnoPattern = /^\d{10}$/;

		$scope.editid = $routeParams.id;
		console.log("edit id:" + $scope.editid);

		if($scope.editid > 0) {
			$scope.heading = "Update Employee";	
			$scope.action = "Update";

			$http.get("/api/employees/" + $scope.editid, {
				headers: {
					"Authorization": 'Bearer ' + tokenProp.getToken()
				}
			})
			.then(
				function(records) {
					console.log("edit success");
					$scope.uniquekey = records.data.id;
					$scope.firstname = records.data.firstName;
					$scope.lastname = records.data.lastName;
					$scope.phonenumber = records.data.mobileNumber;
					$scope.email = records.data.email;
				}, function() {
					console.log("edit failure");
				});
		} else {
			$scope.heading = "New Employee";
			$scope.action = "Save";
		}

		$scope.register = function () {
			var regdata = {
				name: $scope.name,
				email: $scope.email,
				password: $scope.password
			};

			$http.post("/api/register", regdata)
			.then(
				function(data) {
					console.log("registration success");
					console.log(data);
					$scope.token = data.data.token;
					$location.path('/employee/login');
				}, function() {
					console.log("registration failure");
					$location.path('/employee/register');
				});
		};

		$scope.login = function () {
			var logindata = {
				email: $scope.email,
				password: $scope.password
			};

			$http.post("/api/authenticate", logindata)
			.then(
				function(data) {
					console.log("authentication success");
					console.log(data);
					$scope.token = data.data.token;
					tokenProp.setToken($scope.token);
					// $scope.success = true;
					$location.path('/employee/showall');
				}, function() {
					console.log("authentication failure");
					// $scope.success = false;
					$location.path('/employee/create');
				});
		};

		$scope.saveForm = function () {

			console.log($scope.action);

			if($scope.action === 'Save') {
				var empdata = {
					firstName: $scope.firstname,
					lastName: $scope.lastname,
					mobileNumber: $scope.phonenumber,
					email: $scope.email,
					password: $scope.password
				};

				$http.post("/api/employees", empdata, {
					headers: {
						"Authorization": 'Bearer ' + tokenProp.getToken()
					}
				});
			} else {
				var empdata = {
					firstName: $scope.firstname,
					lastName: $scope.lastname,
					mobileNumber: $scope.phonenumber,
					email: $scope.email,
					password: $scope.password
				};

				$http.put("/api/employees/" + $scope.editid, empdata, {
					headers: {
						"Authorization": 'Bearer ' + tokenProp.getToken()
					}
				});
			}

			$scope.uniquekey = '';
			$scope.firstname = '';
			$scope.lastname = '';
			$scope.phonenumber = '';
			$scope.email = '';
			$scope.password = '';
			$scope.password_c = '';

			if($scope.regForm.$valid) {
				if($scope.action === 'Save') {
					alert('Form Submitted Successfully !');
				} else {
					alert('Data Updated Successfully !');
					$scope.heading = "New Employee";
					$scope.action = "Save";
				}
				$scope.regForm.$setPristine();
			}
		};
	}]);