import Modal from "../../components/modal";
import style from "./Project.module.css";

type ConfirmDialogProps = {
    open: boolean;
    message: string;
    children?: React.ReactNode;
    onClose: () => void;
    onConfirm: () => void;
};
const ConfirmDialog = ({
    open,
    onClose,
    children,
    onConfirm,
}: ConfirmDialogProps) => {
    return (
        <Modal isOpen={open} onClose={onClose}>
            <div className={style.confirmDialog}>
                <p>Are you sure you want to delete this task?</p>
                <div className={style.confirmDialogActions}>
                    <button onClick={onConfirm}>Yes</button>
                    <button onClick={onClose} style={{
                         backgroundColor: "#F05A7E",
                    }}>No</button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmDialog;
