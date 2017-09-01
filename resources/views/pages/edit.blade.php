@extends('pages.master')

@section('title', 'SMS')

@section('content')
<main class="col-sm-9 ml-sm-auto col-md-10 pt-3" role="main">
	<h1>Dashboard</h1>

	{{-- <section class="row text-center placeholders"> --}}
	<form method="PATCH" route="['StudentController@update', $student->id]">
		{{ csrf_field() }}
		{{-- <input type="hidden" name="id" value="{{ $student->id }}"> --}}
		<div class="form-group">
			<label for="name">Name: </label>
			<input type="text" class="form-control col-md-6" id="name" name="name" value="{{ $student->name }}">
		</div>
		<div class="form-group">
			<label for="email">Email: </label>
			<input type="email" class="form-control col-md-6" id="email" name="email" value="{{ $student->email }}">
		</div>
		<div class="form-group">
			<label for="password">Password</label>
			<input type="password" class="form-control col-md-6" id="password" name="password" value="{{ $student->password }}">
		</div>
		<button type="submit" class="btn btn-info col-md-6">Update</button>
	</form>
</main>
@endsection