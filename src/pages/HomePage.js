import React from "react";

// components
import Header from '../components/Header/Header';
import MainSection from '../components/Sections/MainSection/MainSection';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import SkillsSection from '../components/Sections/SkillsSection/SkillsSection';
import ExperienceSection from '../components/Sections/ExperienceSection/ExperienceSection';
import ProjectsSection from '../components/Sections/ProjectsSection/ProjectsSection';
import ContactSection from '../components/Sections/ContactSection/ContactSection';


const homePage = () =>{
    return(
        <>
            <Header/>
            <MainSection/>
            <AboutSection/>
            <SkillsSection/>
            <ExperienceSection/>
            <ProjectsSection/>
            <ContactSection/>
        </>
    )
}

export default homePage;
