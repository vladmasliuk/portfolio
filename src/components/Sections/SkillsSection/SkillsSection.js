import React from 'react';

// components
import Section from '../../Basic/Section'
import SectionTitle from '../../Basic/SectionTitle';

// style
import styled from 'styled-components';

// img
import html from '../../../assets/img/html.svg'
import css from '../../../assets/img/css.svg'
import js from '../../../assets/img/js.svg'
import react from '../../../assets/img/react.svg'
import wp from '../../../assets/img/wp.svg'
import woocommerce from '../../../assets/img/woocommerce.svg'

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
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <div className="card-image">
                                <img src={html} alt=""/>
                            </div>
                            <div className="card-image">
                                <img src={css} alt=""/>
                            </div>
                            <div className="card-image">
                                <img src={js} alt=""/>
                            </div>
                            <div className="card-image">
                                <img src={react} alt=""/>
                            </div>
                            <div className="card-image">
                                <img src={wp} alt=""/>
                            </div>
                            <div className="card-image">
                                <img src={woocommerce} alt=""/>
                            </div>
                        </div>
                    </div>
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