<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">

	<title>AngularJS Laravel App</title>

	{{-- <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> --}}
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.1/js/bootstrap.min.js"></script>

	<!-- Angular JS -->
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>  
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/angular-resource/1.6.4/angular-resource.min.js"></script>

	{{-- Satellizer --}}
	<script src="https://cdn.jsdelivr.net/satellizer/0.15.5/satellizer.min.js"></script>
	
	{{-- App Dependencies --}}
	<script src="{{ asset('/app/route.js') }}"></script>

	<!-- Controller -->
	<script src="{{ asset('/app/controllers/CreateEmployeeController.js') }}"></script>
	<script src="{{ asset('/app/controllers/ShowallEmployeeController.js') }}"></script>
	<script src="{{ asset('/app/controllers/LogoutController.js') }}"></script>

	{{-- Services --}}
	<script src="{{ asset('/app/services/employeeServices.js') }}"></script>
	<script src="{{ asset('/app/services/tokenservice.js') }}"></script>

	<!-- Bootstrap core CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>

	<!-- Custom styles for this template -->
	<link href="/css/dashboard.css" rel="stylesheet">
</head>

<body data-ng-app="crudApp">
	<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
		<a class="navbar-brand" href="#!/employee/login" style="color: #343a40;" href="#">Dashboard</a>
		<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		{{-- <div class="collapse navbar-collapse" id="navbarsExampleDefault">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="#!/employee/showall">Home <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item active">
					<a class="nav-link" href="#!/employee/register">Register <span class="sr-only">(current)</span></a>
				</li>
				<li class="nav-item active" ng-if="!isAuthenticated()">
					<a class="nav-link" href="#!/employee/login">Login <span class="sr-only">(current)</span></a>
				</li>
			</ul>
		</div> --}}
	</nav>

	<div class="container-fluid">
		{{-- <div class="row"> --}}
			{{-- <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
				<ul class="nav nav-pills flex-column">
					<li class="nav-item">
						<a class="nav-link" ng-href="#!/employee/create">New Employee</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" ng-href="#!/employee/showall">Employees List</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" ng-href="#!/employee/logout">Logout</a>
					</li>
				</ul>
			</nav> --}}

			{{-- <div class="col-sm-9 ml-sm-auto col-md-10 pt-3"> --}}
				<ng-view></ng-view>
			{{-- </div> --}}
		{{-- </div> --}}
	</div>
</body>
</html>