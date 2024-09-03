import React from "react";
import style from './Input.module.css';

type InputTextProps = {
    label?: string;
    name?: string;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputText = ({ label, name,error, ...rest }: InputTextProps) => {
    return (
        <div className={style.container}>
            <label htmlFor="">{label}</label>
            <input type="text" name={name} className={style.textInput} {...rest} />
            {error && <small className={style.error }>{error}</small>}
        </div>
    );
};

export default InputText;
