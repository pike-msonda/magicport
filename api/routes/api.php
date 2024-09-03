<?php

use App\Http\Controllers\Api\ProjectsController;

use App\Http\Controllers\Api\ProjectTasksController;
use App\Http\Controllers\Api\TasksController;
use Illuminate\Support\Facades\Route;



Route::group(['namespace' => 'Api', 'middleware' => 'auth.basic'], function () {
    Route::group(['prefix' => 'projects'], function () {
        Route::get('/', [ProjectsController::class, 'index']);
        Route::get('/{project}/tasks', [ProjectTasksController::class, 'index']);
        Route::post('/{project}/tasks', [ProjectTasksController::class, 'store']);
        Route::get('/{project}', [ProjectsController::class, 'show']);
    });
    Route::group(['prefix' => 'tasks'], function () {
        Route::put('/{task}', [TasksController::class, 'update']);
        Route::patch('/{task}', [TasksController::class, 'update']);
        Route::delete('/{task}', [TasksController::class, 'delete']);
    });
});
