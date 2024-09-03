import api from "./";
import { CreateTaskRequest, Project, Task } from "types";

const getProjects = async (): Promise<Project[]> => {
    const response = await api.get<Project[]>("/projects");
    return response.data;
};
const getProjectById = async (projectId: string | undefined) => {
    const response = await api.get<Project>(`/projects/${projectId}`);
    return response.data;
};
const createTask = async (projectId: string| number, data: CreateTaskRequest) => {
    const response = await api.post<Task>(`/projects/${projectId}/tasks`, data);
    return response.data;
};

const getTasksByProject = async (projectId: string | number | undefined): Promise<Task[]> => {
    const response = await api.get<Task[]>(`/projects/${projectId}/tasks`);
    return response.data;
};

export { getProjects, getProjectById, createTask, getTasksByProject};
