import React from 'react';

// lib
import { Element } from 'react-scroll'

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';
import SectionTitle from '../../Basic/SectionTitle';

// style
import styled from 'styled-components';

// Breakpoints
import breakpoint from '../../../breakpoint/breakpoint';

const AboutSection = () =>{
    return(
        <Element id='about-sec' name='about-sec'>
            <Section>
                <Container>
                    <SectionTitle>
                        01. About
                    </SectionTitle>
                    <Text>
                    My name is Vladyslav and I'm Web Deleloper with 2+ years of experience.
                    I like web programming, resolving problems and creating creative things with web technologies.
                    </Text>
                </Container>
            </Section>
        </Element>
    )
}

const Text = styled.p`
    color: #e6e6e6;
    font-size: 3.5vw;
    line-height: 1.25;
    margin: 0;
    @media ${breakpoint.device.mobile}{
        font-size: 5vw;
    }
`;

export default AboutSection;