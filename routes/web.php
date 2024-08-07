<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'web'], function () {
    Route::get('/get-laravel-permission-to-vuejs', function () {
        return auth()->check()?auth()->user()->jsPermissions():0;
    });
});