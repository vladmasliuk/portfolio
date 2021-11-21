import React from 'react';

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';
import SectionTitle from '../../Basic/SectionTitle';
import ProjectItem from '../../ProjectItem/ProjectItem'

// style
import styled from 'styled-components';

// data
import projects from '../../../projects';

const ProjectsSection = () =>{

    return(
        <Section light>
            <Container>
                <SectionTitle>
                    04. Some of my projects
                </SectionTitle>
                <ProjectList>
                    {projects.map((project, index) => (
                        <ProjectItem key={index} project={project} index={index}/>
                    ))}
                </ProjectList>
            </Container>
        </Section>
    )
}

const ProjectList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    position: relative
`;

export default ProjectsSection;