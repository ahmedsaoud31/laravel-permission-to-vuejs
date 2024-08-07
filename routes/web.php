<?php

use Illuminate\Support\Facades\Route;

Route::get('/get-laravel-permission-to-vuejs', function () {
    return auth()->check()?auth()->user()->jsPermissions():0;
});