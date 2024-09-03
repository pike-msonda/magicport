import React from "react";
import style from "./Panel.module.css";

import { Project } from "types";
import Header from "./Header";
import List from "../../components/list";
import Card from "./Card";

type PanelProps = {
    projects: Project[];
};
const Panel = ({ projects }: PanelProps) => {
    return (
        <div className={style.container}>
            <Header numProjects={projects.length} />
            <List
                className={style.lists}
                items={projects}
                keyExtractor={(project) => project.id}
                renderItem={(project) => (
                    <Card
                        id={project.id}
                        title={project.name}
                        createdAt={project.created_at}
                        description={project.description}
                    />
                )}
            />
        </div>
    );
};

export default Panel;
