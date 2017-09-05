<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
    }

    public function create()
    {
    }

    public function store(Request $request)
    {   
        Employee::create(request(['firstName', 'lastName', 'mobileNumber', 'email', 'password']));
    }

    public function show($id)
    {
        return Employee::find($id);
    }

    public function showall()
    {
        return Employee::all();
    }

    public function edit(Employee $employee)
    {
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::find($id);
        $employee->update(request(['firstName', 'lastName', 'mobileNumber', 'email', 'password']));
    }

    public function destroy($id)
    {
        Employee::where('id',$id)->delete();
        return Employee::all();
    }
}