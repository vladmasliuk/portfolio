import React from 'react';

// lib
import { Element } from 'react-scroll'

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';

// style
import styled from 'styled-components';

const ContactSection = () =>{
    return(
        <Element id='contact-sec' name='contact-sec'>
            <Section>
                <Container>
                    <Wrap>
                        <div>
                            <Title>Contact</Title>
                            <a href="mailto:vladmasliuk@gmail.com">vladmasliuk@gmail.com</a>
                        </div>
                    </Wrap>
                </Container>
            </Section>
        </Element>
    )
}

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Title = styled.h2`
    color: #fff;
    // font-family: 'True Lies',sans-serif;
    font-size: 7vw;
    text-shadow: 0 0 10px  #3cff00, 0 0 40px  #3cff00 , 0 0 80px  #3cff00;
    margin: 0 0 20px 0;
    font-weight: 400;
`;
export default ContactSection;