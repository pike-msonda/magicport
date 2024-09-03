<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskUpdateRequest;
use App\Http\Resources\TaskResource;
use App\Models\Task;
use App\Tasks\Services\TaskService;
use Illuminate\Http\Request;

class TasksController extends Controller
{

    protected $service;
    public function __construct(TaskService $taskService)
    {
        $this->service = $taskService;
    }

    public function update(Task $task, TaskUpdateRequest $request)
    {

        $task = $this->service->updateTask($task, $request->all());

        return response()->json(new TaskResource($task));
    }

    public function delete(Task $task)
    {
        $task->delete();
        return response()->json(new TaskResource($task));
    }
}
