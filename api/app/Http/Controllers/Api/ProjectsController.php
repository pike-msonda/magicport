<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Projects\Services\ProjectService;

class ProjectsController extends Controller
{

    protected $service;
    public function __construct(ProjectService $projectService)
    {
        $this->service = $projectService;
    }

    public function index()
    {

        $projects = $this->service->listProjects();

        return response()->json(ProjectResource::collection($projects));
    }

    public function show(Project $project)
    {
        return response()->json(new ProjectResource($project));
    }
}
