import React from "react";
import Header from "./Header";
import Content from "./Content";

const ProjectRoot = ({ children }: { children: React.ReactNode }) => {
    return <div style={{
        display: "flex",
        flexDirection: "column",
        margin: "30px 0px",
        gap: "1rem",
    }}>{children}</div>;
};

const ProjectItem = {
    Root: ProjectRoot,
    Header: Header,
    Content,
};
export default ProjectItem;
