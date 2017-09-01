<?php

namespace App;

use Illuminate\Database\Eloquent\Model as Eloquent;

class Employee extends Eloquent
{
    protected $fillable = [
    	'firstName', 'lastName', 'mobileNumber', 'email', 'password',
    ];

    protected $hidden = [
    	'password'
    ];
}
