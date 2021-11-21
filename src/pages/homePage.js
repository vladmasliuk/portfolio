import React from "react";

// components
import MainSection from '../components/Sections/MainSection/MainSection';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import SkillsSection from '../components/Sections/SkillsSection/SkillsSection';
import ExperienceSection from '../components/Sections/ExperienceSection/ExperienceSection';
import ProjectsSection from '../components/Sections/ProjectsSection/ProjectsSection';
import ContactSection from '../components/Sections/ContactSection/ContactSection';

const HomePage = () =>{
    return(
        <>
            <MainSection/>
            <AboutSection/>
            <SkillsSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <ContactSection/>
        </>
    )
}

export default HomePage;