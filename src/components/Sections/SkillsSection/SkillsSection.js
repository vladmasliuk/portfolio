import React from 'react';

// lib
import { Element } from 'react-scroll';

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';
import SectionTitle from '../../Basic/SectionTitle';

// style
import styled from 'styled-components';

// Breakpoints
import breakpoint from '../../../breakpoint/breakpoint';

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
                        <TextWrap>
                            <Text>Technologies: HTML / CSS / JavaScript / JQuery / PHP / MySQL / Wordpress / Woocommerce /
                                React JS / React&nbsp;Native / Next&nbsp;JS / REST&nbsp;API / Firebase / MongoDB
                            </Text>
                            <Text>
                                Design tools: Figma / Photoshop / AbodeXD
                            </Text>
                            <Text>
                                Other: Slack / Notion / Asana
                            </Text>
                        </TextWrap>
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
    @media ${breakpoint.device.tablet}{
        grid-template-columns: repeat(1, 1fr);
    }
`;

const TextWrap = styled.div`
    width: 70%;
    @media ${breakpoint.device.tablet}{
        width: 100%;
    }
`;

const Text = styled.p`
    color: #e6e6e6;
    margin: 0 0 20px 0;
    font-size: 20px;
`;

const ImagesContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    @media ${breakpoint.device.tablet}{
        width: 100%;
    }
`;

const ImagesWrap = styled.div`
    column-count: 4;
    column-gap: 1em;
    @media ${breakpoint.device.mobile}{
        column-count: 2;
    }
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