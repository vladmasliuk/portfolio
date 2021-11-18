import React from 'react';
import './SkillsSection.css'

// libs
import SkillBar from 'react-skillbars';

// components
import Section from '../../Basic/Section'
import SectionTitle from '../../Basic/SectionTitle';

// style
import styled from 'styled-components';

const skills = [
    {type: "HTML", level: 85},
    {type: "CSS", level: 75},
    {type: "JS", level: 75},
    {type: "JQuery", level: 75},
    {type: "Wordpress", level: 75},
    {type: "React", level: 75},
    {type: "ReactNative", level: 75},
];

const skillsColor = {
    "bar": "#636363",
    "title": {
      "text": "#e6e6e6",
      "background": "#636363"
    }
}

const SkillsSection = () =>{
    return(
       <>
            <Section>
                <SectionTitle>
                    02. Skills
                </SectionTitle>
                <SkillsContent>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </Text>
                    <SkillBar skills={skills} colors={skillsColor} height={30}/>
                </SkillsContent>
            </Section>
       </>
    )
}

const SkillsContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
`;

const Text = styled.p`
    color: #e6e6e6;
    margin: 0;
`;

export default SkillsSection;