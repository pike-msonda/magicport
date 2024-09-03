import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { formatDate } from "./utils";

type CardProps = {
    id: number | string;
    title: string;
    createdAt: string;
    description?: string;
};
const Card = ({ id, title, createdAt, description }: CardProps) => {
    return (
        <div className={style.container}>
            <h3>{title}</h3>
            <div className={style.createdAt}>
                <span>created: </span><span>{formatDate(new Date(createdAt))}</span>
            </div>
            <p className={style.description}>{`${description?.slice(
                0,
                120
            )}...`}</p>
            <Link to={`/projects/${id}`}>
                <button className={style.button}>View</button>
            </Link>
        </div>
    );
};

export default Card;
