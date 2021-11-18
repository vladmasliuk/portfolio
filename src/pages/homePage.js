import React from "react";

// components
import Container from '../components/Basic/Container';
import MainSection from '../components/Sections/MainSection/MainSection';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import SkillsSection from '../components/Sections/SkillsSection/SkillsSection';
import ExperienceSection from '../components/Sections/ExperienceSection/ExperienceSection';

const homePage = () =>{
    return(
        <>
            <MainSection/>
            <Container>
                <AboutSection/>
                <SkillsSection/>
                <ExperienceSection/>
            </Container>
        </>
    )
}

export default homePage;