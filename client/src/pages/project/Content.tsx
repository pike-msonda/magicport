import React from "react";
import { Project } from "types";
import style from "./Project.module.css";
import { formatDate } from "../dashboard/utils";

type ContentProps = {
    project: Project;
    children?: React.ReactNode;
};
const Content = ({ project, children }: ContentProps) => {
    return (
        <div className={style.card}>
              <div
                style={{
                    display: "flex",
                    gap: "1rem",
                  
                    alignItems: "center",
                }}
            >
                <span
                    style={{
                        color: "#F05A7E",
                        fontSize: "12px",
                        border: "1px solid #F05A7E",
                        borderRadius: "5px",
                        padding: "2px 6px",
                    }}
                >
                    {formatDate(new Date(project.created_at))}
                </span>
            </div>
            <h5
                style={{
                    color: "#F05A7E",
                    marginBlockEnd: 0,
                    marginBlockStart: 0,
                    marginTop: "10px",
                }}
            >
                Description
            </h5>
          

            <p>{project.description}</p>
            {children}
        </div>
    );
};

export default Content;
