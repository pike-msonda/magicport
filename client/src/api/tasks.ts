import api from "./";
import { Project, Task, UpdateTaskRequest } from "types";

const getTasks = async () => {
    const response = await api.get<Project>("/tasks");
    return response.data;
};

const updateTask = async (taskId: number | string, data: UpdateTaskRequest) => {
    const response = await api.put<Task>(`/tasks/${taskId}`, data);
    return response.data;
};

const deleteTask = async (taskId: number | string) => {
    const response = await api.delete<Task>(`/tasks/${taskId}`);
    return response.data;
};

export { getTasks, updateTask, deleteTask };
