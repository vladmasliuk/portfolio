import React from 'react';

// lib
import { Element } from 'react-scroll';

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';
import SectionTitle from '../../Basic/SectionTitle';

// style
import styled from 'styled-components';

const images = [
    {
        "url": 'https://i.ibb.co/6gKDgrV/adbl.jpg'
    },
    {
        "url": 'https://i.ibb.co/3pMtzTM/lesesame.jpg'
    },
    {
        "url": 'https://i.ibb.co/cXW23fn/manuf.jpg'
    },
    {
        "url": 'https://i.ibb.co/7KsCMXF/soc.jpg'
    },
    {
        "url": 'https://i.ibb.co/y45X1mg/audio.jpg'
    }
]

const SkillsSection = () =>{
    return(
        <Element id='skills-sec' name='skills-sec'>
            <Section light>
                <Container>
                    <SectionTitle>02. Skills</SectionTitle>
                    <SkillsContent>
                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </Text>
                        <ImagesContainer>
                            <ImagesWrap>
                            {images.map((img, index) => (
                                <ImageCard key={index}>
                                    <Image src={img.url} alt="Project screen"/>
                                </ImageCard>
                            ))}
                            </ImagesWrap>
                        </ImagesContainer>
                    </SkillsContent>
                </Container>
            </Section>
        </Element>
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

const ImagesContainer = styled.div`
    width: 70%;
    margin: 0 auto;
`;

const ImagesWrap = styled.div`
    column-count: 4;
    column-gap: 1em;
`;

const ImageCard = styled.div`
    margin: 0 0 .5em;
    width: 100%;
    display: block;
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
    box-sizing: border-box;
`;



export default SkillsSection;