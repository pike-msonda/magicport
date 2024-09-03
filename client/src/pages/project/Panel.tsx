import { Project } from "types";
import ProjectItem from "./ProjectItem";
import Tasks from "./TasksContainer";
import { useNavigate } from "react-router-dom";

type PanelProps = {
    project: Project;
};

const Panel = ({ project }: PanelProps) => {
    const navigate = useNavigate();
    return (
        <ProjectItem.Root>
            <button onClick={() => navigate(-1)}>Back</button>
            <ProjectItem.Header item={project} />
            <ProjectItem.Content project={project}>
                <Tasks projectId={project.id} />
            </ProjectItem.Content>
        </ProjectItem.Root>
    );
};

export default Panel;
