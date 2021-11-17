import React from "react";

// components
import Container from '../components/Basic/Container';
import MainSection from '../components/Sections/MainSection/MainSection';
import AboutSection from '../components/Sections/AboutSection/AboutSection';

const homePage = () =>{
    return(
        <>
            <MainSection/>
            <Container>
                <AboutSection/>
            </Container>
        </>
    )
}

export default homePage;