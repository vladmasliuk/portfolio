import React from 'react';

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';
import SectionTitle from '../../Basic/SectionTitle';

// style
import styled from 'styled-components';

const AboutSection = () =>{
    return(
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
    )
}

const Text = styled.p`
    color: #e6e6e6;
    // font-size: 70px;
    font-size: 3.5vw;
    line-height: 1.25;
    margin: 0;
`;

export default AboutSection;