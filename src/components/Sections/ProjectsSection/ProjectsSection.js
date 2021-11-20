import React from 'react';

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';
import SectionTitle from '../../Basic/SectionTitle';
import ProjectItem from '../../ProjectItem/ProjectItem'

// style
import styled from 'styled-components';

const projects = [
    {
        "title": "adbl",
        "desc": "description",
        "img": "../project/adbl/adbl-main.jpeg",
        "url": "https://someurl.com",
    },
    {
        "title": "lesesame",
        "desc": "description",
        "img": "../project/lesesame/lesesame-main.jpg",
        "url": "https://someurl.com",
    },
    {
        "title": "manufakturawladku",
        "desc": "description",
        "img": "../project/manuf/manuf-main.jpg",
        "url": "https://someurl.com",
    },
    {
        "title": "social media",
        "desc": "description",
        "img": "../project/socialmedia/social-main.jpg",
        "url": "https://someurl.com",
    },
    {
        "title": "robimelektryke",
        "desc": "description",
        "img": "../project/robimelektryke/robim-main.jpg",
        "url": "https://someurl.com",
    }
]

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