@extends('pages.master')

@section('title', 'SMS')

@section('content')
<main class="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
	<h1>Students List</h1>
	<table class="table table-hover">
		<thead>
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Email</th>
				<th>Password</th>
				<th>Edit</th>
				<th>Delete</th>
			</tr>
		</thead>
		<tbody>
			<?php $i=1 ?>
			@foreach($students as $stu)
			<tr>
				<th scope="row">{{ $i }}</th>
				<td><a href="/student/show/{{ $stu->id }}">{{ $stu->name }}</a></td>
				<td>{{ $stu->email }}</td>
				<td>{{ $stu->password }}</td>
				<td><a href="/student/edit/{{ $stu->id }}"><button class="btn btn-primary">Edit</button></a></td>
				<td><a href="/student/destroy/{{ $stu->id }}"><button class="btn btn-danger">Delete</button></a></td>
			</tr>
			<?php $i++ ?>
			@endforeach
		</tbody>
	</table>
</main>
@endsection