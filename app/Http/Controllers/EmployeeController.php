<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {   
        Employee::create(request(['firstName', 'lastName', 'mobileNumber', 'email', 'password']));
    }

    public function show(Employee $employee)
    {
        //
    }

    public function showall()
    {
        return Employee::all();
    }

    public function edit(Employee $employee)
    {
        //
    }

    public function update(Request $request, Employee $employee)
    {
        //
    }

    public function destroy(Employee $employee)
    {
        //
    }
}
