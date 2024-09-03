<?php
namespace App\Tasks\Repositories;
use App\BaseRepository;
use App\Models\Task;
class TaskRepository extends BaseRepository
{

    public function __construct(Task $model)
    {
        $this->model = $model;
    }
    
}