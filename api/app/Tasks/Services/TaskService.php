<?php

namespace App\Tasks\Services;

use App\Events\TaskCreated;
use App\Models\Project;
use App\Models\Task;
use App\Tasks\Repositories\TaskRepository;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class TaskService
{
    protected $repository;

    public function __construct(TaskRepository $taskRepository)
    {
        $this->repository = $taskRepository;
    }

    public function listTaskByProject(Project $project): Collection
    {
        $tasks = $project->load('tasks')->tasks;
        return $tasks;
    }

    public function listTasks(): Collection
    {
        return $this->repository->findAll();
    }

    public function createTask(Project $project, array $data): Task
    {
        return DB::transaction(function () use ($project, $data) {
           
            $task = $project->tasks()->create($data);

            event(new TaskCreated($project));

            return $task;
        });
    }

    public function updateTask(Task $task, array $data): Task
    {
        $this->repository->update($data, $task->id);

        $task = Task::with('project')->find($task->id);

        event(new TaskCreated($task->project));

        return $task;
    }

}
