import React from 'react';

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';
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
                            <ImageCard>
                                <Image src={html} alt=""/>
                            </ImageCard>
                            <ImageCard className="card-image">
                                <Image src={css} alt=""/>
                            </ImageCard>
                            <ImageCard className="card-image">
                                <Image src={js} alt=""/>
                            </ImageCard>
                            <ImageCard className="card-image">
                                <Image src={react} alt=""/>
                            </ImageCard>
                            <ImageCard className="card-image">
                                <Image src={wp} alt=""/>
                            </ImageCard>
                            <ImageCard className="card-image">
                                <Image src={woocommerce} alt=""/>
                            </ImageCard>
                        </ImagesWrap>
                    </ImagesContainer>
                </SkillsContent>
            </Container>
        </Section>
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
    overflow: hidden;
`;

const ImagesWrap = styled.div`
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 50px;
    transform-style: preserve-3d;
    transform: rotateX(65deg) rotateZ(50deg) rotateY(5deg);
`;

const ImageCard = styled.div`
    transition: 0.3s;
    &:hover{
        transform: translateZ(20px);
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;



export default SkillsSection;