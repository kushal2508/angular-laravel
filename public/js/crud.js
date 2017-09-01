var app = angular.module('crudApp', []);

app.directive('validPasswordC', function() {
	return {
		require: 'ngModel',
		scope: {
			reference: '=validPasswordC'
		},
		link: function(scope, elm, attrs, ctrl) {
			ctrl.$parsers.unshift(function(viewValue, $scope) {
				var noMatch = viewValue != scope.reference
				ctrl.$setValidity('noMatch', !noMatch);
				return (noMatch)?noMatch:!noMatch;
			});
			scope.$watch("reference", function(value) {;
				ctrl.$setValidity('noMatch', value === ctrl.$viewValue);
			});
		}
	}
});

app.controller('EmployeeController', ['$scope', '$http', function ($scope, $http) {
	console.log("successful");
	$scope.title = "Registration Form";
	$scope.phnoPattern = /^\d{10}$/;

	/*$scope.saved = localStorage.getItem('formdata');
	// $scope.formdata = (localStorage.getItem('formdata')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
	$scope.formdata = (localStorage.getItem('formdata')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('formdata', JSON.stringify($scope.saved));

	console.log(JSON.stringify($scope.saved));*/

	// $http.get('/employee/create').success(function());

	$scope.saveForm = function () {

		var adata = {
			firstName: $scope.firstname,
			lastName: $scope.lastname,
			mobileNumber: $scope.phonenumber,
			email: $scope.email,
			password: $scope.password
		};

		console.log(adata);
		console.log(JSON.stringify(adata));

		/*$http({
			url: "/employee/create",
			method: "POST",
			data: adata
			// headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		})
		.then(
			function(data, status, headers, config) {
				console.log("success");
			}, 
			function(data, status, headers, config) {
				console.log("failure");
		});*/

		$http.post("/employee/create", adata);

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
		$scope.email = '';
		$scope.phonenumber = '';

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