import { useState } from "react";
import InputText from "../../components/input-text";
import Modal from "../../components/modal";
import style from "./Project.module.css";
import { StatusOptions } from "./constants";
import { Task } from "types";

type EditTaskProps = {
    task: Task
    isOpen: boolean;
    onSubmit?: (data: any) => void;
    onClose?: () => void;
};
const EditTaskForm = ({
    isOpen = false,
    task,
    onSubmit,
    onClose,
}: EditTaskProps) => {
    const [formData, setformData] = useState({
        name: task.name,
        description: task.description,
        status: task.status,
    });

    const handleSubmit = () => {
        onSubmit && onSubmit(formData);
    };

    const handleFormChange = (event: React.ChangeEvent<HTMLElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        setformData({ ...formData, [name]: value });
    };

    const { name, description, status } = formData;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={style.createForm}>
                <InputText
                    name="name"
                    label="Name"
                    value={name}
                    onChange={handleFormChange}
                />
                <InputText
                    name="description"
                    label="Description"
                    value={description}
                    onChange={handleFormChange}
                />
                <select
                    className={style.selectInput}
                    name="status"
                    value={status}
                    onChange={handleFormChange}
                >
                    {StatusOptions.map((option) => {
                        return (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        );
                    })}
                </select>
                <div className={style.formActionButons}>
                    <button className={style.submitButton} onClick={handleSubmit}>Save</button>
                    <button>Cancel</button>
                </div>
            </div>
        </Modal>
    );
};

export default EditTaskForm;
