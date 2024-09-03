import { getProjectById } from "../../api/projects";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Project } from "types";
import Panel from "./Panel";

const ProjectContainer = () => {
    const { id } = useParams();
    const [project, setProjects] = React.useState<Project>();
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            getProjectById(id)
                .then((data) => {
                    setProjects(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        };

        fetchData();
    }, []);

    if (loading || !project) {
        return <div>Loading...</div>;
    }

    return <Panel project={project} />;
};

export default ProjectContainer;
