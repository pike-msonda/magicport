import { createTask, getTasksByProject } from "../../api/projects";
import React, { useEffect } from "react";
import { CreateTaskRequest, Task, UpdateTaskRequest } from "types";
import Tasks from "./Tasks";
import { deleteTask, updateTask } from "../../api/tasks";

type TasksContainerProps = {
    projectId: string | number | undefined;
};
const TasksContainer = ({ projectId }: TasksContainerProps) => {
    const [tasks, setTasks] = React.useState<Task[]>([]);
    const [loading, setLoading] = React.useState(true);

    const handleCreateProjectTask = (params: CreateTaskRequest) => {
        if (!projectId) {
            return;
        }
        createTask(projectId, params).then((data) => {
            setTasks([...tasks, data]);
        });
    };

    const handleProjectTaskUpdate = (
        taskId: number | string,
        params: UpdateTaskRequest
    ) => {
        updateTask(taskId, params).then((data) => {
            const taskIndex = tasks.findIndex((task) => task.id === data.id);
            const currentTasks = tasks.slice();
            currentTasks[taskIndex] = data;
            setTasks(currentTasks);
        });
    };

    const handleDeleteTask = (taskId: number | string) => {
        deleteTask(taskId).then((data) => {
            setTasks(tasks.filter((task) => task.id !== data.id));
        });
    };
    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            getTasksByProject(projectId)
                .then((data) => {
                    setTasks(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        };

        fetchData();
    }, [projectId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Tasks
            items={tasks}
            createTask={handleCreateProjectTask}
            updateTask={handleProjectTaskUpdate}
            deleteTask={handleDeleteTask}
        />
    );
};

export default TasksContainer;
