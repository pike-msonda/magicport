<?php

namespace App\Projects\Repositories;

use App\BaseRepository;
use App\Models\Project;

class ProjectRepository extends BaseRepository
{
 
    public function __construct(Project $model) 
    {
        $this->model = $model;
    }
}