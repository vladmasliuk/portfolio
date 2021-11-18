import React from "react";

// components
import MainSection from '../components/Sections/MainSection/MainSection';
import AboutSection from '../components/Sections/AboutSection/AboutSection';
import SkillsSection from '../components/Sections/SkillsSection/SkillsSection';
import ExperienceSection from '../components/Sections/ExperienceSection/ExperienceSection';

const homePage = () =>{
    return(
        <>
            <MainSection/>
            <AboutSection/>
            <SkillsSection/>
            <ExperienceSection/>
        </>
    )
}

export default homePage;