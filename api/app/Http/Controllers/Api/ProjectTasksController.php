<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskCreateRequest;
use App\Http\Resources\TaskResource;
use App\Models\Project;
use App\Tasks\Services\TaskService;
use Illuminate\Http\Request;

class ProjectTasksController extends Controller
{

    protected $service;
    public function __construct(TaskService $taskService)
    {
        $this->service = $taskService;
    }

    public function index(Project $project)
    {
        $tasks = $this->service->listTaskByProject($project);

        return response()->json(TaskResource::collection($tasks));
    }

    public function store(Project $project, TaskCreateRequest $request)
    {
        $task = $this->service->createTask($project, $request->all());

        return response()->json(new TaskResource($task));
    }

   

}
