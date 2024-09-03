import { getProjects } from "../../api/projects";
import React, { useEffect } from "react";
import { Project } from "types";
import Panel from "./Panel";

const DashboardContainer = () => {
    const [projects, setProjects] = React.useState<Project[]>([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        const fetchData = () => {
            setLoading(true);
            getProjects()
                .then((data) => {
                    setProjects(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
      <Panel projects={projects} />
    );
};

export default DashboardContainer;
