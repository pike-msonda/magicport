<?php

namespace App\Projects\Services;

use App\Projects\Repositories\ProjectRepository;

class ProjectService
{
    protected $projectRepository;

    public function __construct(ProjectRepository $projectRepository)
    {
        $this->projectRepository = $projectRepository;
    }

    public function listProjects()
    {
        return $this->projectRepository->findAll();
    }
}
