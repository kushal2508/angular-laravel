app.controller('CreateEmployeeController', ['$scope', '$http', function ($scope, $http) {
	$scope.heading = "New Employee";
	$scope.title = "Registration Form";
	$scope.phnoPattern = /^\d{10}$/;

	$scope.saveForm = function () {

		var empdata = {
			firstName: $scope.firstname,
			lastName: $scope.lastname,
			mobileNumber: $scope.phonenumber,
			email: $scope.email,
			password: $scope.password
		};

		$http.post("/employee/create", empdata);

		/*var counter = 0;
		var arraydata = $scope.formdata;
		for(ayd in arraydata) {
			if(arraydata[ayd].uid === $scope.uniquekey){
				arraydata[ayd].fn = $scope.firstname;
				arraydata[ayd].ln = $scope.lastname;
				arraydata[ayd].em = $scope.email;
				arraydata[ayd].pn = $scope.phonenumber;
				counter++;
			}
			$scope.formdata = arraydata;
		}
		if(counter === 0) { 
			var d = new Date().valueOf();
			$scope.formdata.push({
				uid: d,
				fn: $scope.firstname,
				ln: $scope.lastname,
				em: $scope.email,
				pn: $scope.phonenumber
			});
		}
		counter = 0;*/
		$scope.uniquekey = '';
		$scope.firstname = '';
		$scope.lastname = '';
		$scope.phonenumber = '';
		$scope.email = '';
		$scope.password = '';
		$scope.password_c = '';
		

		// localStorage.setItem('formdata', JSON.stringify($scope.formdata));

		if($scope.regForm.$valid) {
			alert('Form Submitted Successfully !');
			$scope.regForm.$setPristine();
		}
	};

	$scope.editData = function(fd) {
		$scope.regForm.$setPristine();
		$scope.uniquekey = fd.uid;
		$scope.firstname = fd.fn;
		$scope.lastname = fd.ln;
		$scope.email = fd.em;
		$scope.phonenumber = fd.pn;
	}
}]);