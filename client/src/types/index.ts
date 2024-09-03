export type Project = {
    id: string;
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
};

export type Task = {
    id: string;
    name: string;
    description: string;
    status: "todo" | "in_progress" | "done";
};

export type CreateTaskRequest = {
    id?: string;
    projectId: number;
} & Task;

export type UpdateTaskRequest = {
    id: string
    name?: string;
    description?: string;
    status?: "todo" | "in_progress" | "done";
};
