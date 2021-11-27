import React, { useEffect }  from "react";

// components
import ProjectLayout from '../components/ProjectLayout/ProjectLayout';
import NotFoundPage from './NotFoundPage';

const ProjectPage = ({project}) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const projectData = project ? (
        <ProjectLayout project={project}/>
    ) : (
        <NotFoundPage/>
    )

    return projectData;
}

export default ProjectPage;
