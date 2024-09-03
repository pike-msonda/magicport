import { CreateTaskRequest, Task, UpdateTaskRequest } from "types";
import style from "./Tasks.module.css";
import CreateTaskForm from "./CreateTaskForm";
import { useState } from "react";
import EditTaskForm from "./EditTaskFrom";
import ConfirmDialog from "./ConfirmDialog";

type TasksProps = {
    items: Task[];
    createTask: (params: CreateTaskRequest) => void;
    updateTask: (taskId: string | number, params: UpdateTaskRequest) => void;
    deleteTask: (taskId: string | number) => void;
};

const COLUMNS = ["Name", "Description", "Status", "Actions"];
const Tasks = ({ items, createTask, updateTask, deleteTask }: TasksProps) => {
    const [formOpen, setFormOpen] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [editFormOpen, setEditForm] = useState(false);

    return (
        <div className={style.container}>
            <button
                onClick={() => setFormOpen(true)}
                style={{
                    marginBottom: "20px",
                }}
            >
                Create Task
            </button>
            {items.length === 0 && <div>No tasks found</div>}
            {items.length > 0 && (
                <table className={style.tableContainer}>
                    <thead>
                        <tr>
                            {COLUMNS.map((column, index) => {
                                return <th key={index}>{column}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <>
                                <TaskRow
                                    key={item.id}
                                    item={item}
                                    onEdit={() => setEditForm(true)}
                                    onDelete={() => setOpenDeleteDialog(true)}
                                />
                                <EditTaskForm
                                    task={item}
                                    isOpen={editFormOpen}
                                    onClose={() => setEditForm(false)}
                                    onSubmit={(data) => {
                                        updateTask(item.id, data);
                                        setEditForm(false);
                                    }}
                                />
                                <ConfirmDialog
                                    open={openDeleteDialog}
                                    message="Are you sure you want to detele this task?"
                                    onClose={() => setOpenDeleteDialog(false)}
                                    onConfirm={() => {
                                        deleteTask(item.id);
                                        setOpenDeleteDialog(false);
                                    }}
                                />
                            </>
                        ))}
                    </tbody>
                </table>
            )}
            <CreateTaskForm
                isOpen={formOpen}
                onClose={() => setFormOpen(false)}
                onSubmit={(data) => {
                    createTask(data);
                    setFormOpen(false);
                }}
            />
        </div>
    );
};

const TaskRow = ({
    item,
    onEdit,
    onDelete,
}: {
    item: Task;
    onEdit: () => void;
    onDelete: () => void;
}) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.status?.split("_").join(" ")}</td>
            <td
                style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                }}
            >
                <button onClick={onEdit}>Edit</button>
                <button
                    onClick={onDelete}
                    style={{
                        backgroundColor: "#F05A7E",
                    }}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default Tasks;
