import { useState } from "react";
import InputText from "../../components/input-text";
import Modal from "../../components/modal";
import style from "./Project.module.css";
import { StatusOptions } from "./constants";



type CreateTaskFormProps = {
    isOpen: boolean;
    onSubmit?: (data: any) => void;
    onClose?: () => void;
};
const CreateTaskForm = ({
    isOpen = false,
    onSubmit,
    onClose,
}: CreateTaskFormProps) => {
    const [formData, setformData] = useState({
        name: "",
        description: "",
        status: "todo",
    });

    const [errors, setErrors] = useState({
        name: "",
    });

    const handleSubmit = () => {
        if(!validateForm()) return;
        onSubmit && onSubmit(formData);
    };

    const validateForm = () => {
        const { name } = formData;
        if (!name) {
            setErrors({ ...errors, name: "Name is required" });
            return false;
        }

        return true;
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
                    error={errors?.name}

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
                    <button onClick={handleSubmit}>Create Task</button>
                    <button>Cancel</button>
                </div>
            </div>
        </Modal>
    );
};

export default CreateTaskForm;
