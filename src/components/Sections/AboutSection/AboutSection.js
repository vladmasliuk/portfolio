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
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
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