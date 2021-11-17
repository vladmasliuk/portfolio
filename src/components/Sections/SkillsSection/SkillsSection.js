import React from 'react';

// libs
import SkillBar from 'react-skillbars';

// components
import Section from '../../Basic/Section'
import SectionTitle from '../../Basic/SectionTitle';

// style
// import styled from 'styled-components';

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
                <SkillBar skills={skills} colors={skillsColor}/>
            </Section>
       </>
    )
}

export default SkillsSection;