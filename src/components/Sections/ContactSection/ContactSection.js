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
                            <h2>Contact</h2>
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

export default ContactSection;