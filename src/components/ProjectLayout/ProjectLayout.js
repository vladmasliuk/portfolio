import React from "react";
import { useHistory } from "react-router-dom";

// lib
import Slider from "react-slick";

// components
import Container from '../Basic/Container';
import SectionTitle from '../Basic/SectionTitle';
import ProjectFeature from '../ProjectFeature/ProjectFeature' 
import ProjectScreen from '../ProjectScreen/ProjectScreen'
import ProjectTechItem from '../ProjectTechItem/ProjectTechItem';

// style
import styled from 'styled-components';

// img
import BackImg from '../../assets/img/back-arr.svg'
import LinkImg from '../../assets/img/open-icon.svg'

// css
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"

// Breakpoints
import breakpoint from '../../breakpoint/breakpoint';

const ProjectLayout = ({project}) =>{
    const history = useHistory();

    const sliderSet = {
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return(
        <PageWrap>
            <Container>
                <BackBtn onClick={history.goBack}>
                    <img style={{width: 40}} src={BackImg} alt="Back arrow"/>
                </BackBtn>
                <Wrap>
                    <ImgWrap>
                        <Img src={project.img} alt={project.title}/>
                    </ImgWrap>
                    <TextWrap>
                        <Title>{project.title}</Title>
                        <Desc>{project.desc}</Desc>
                        {project.tech ? (
                            <TechWrap>
                                {project.tech.map((techItem, index) => (
                                    <ProjectTechItem key={index} techItem={techItem}/>
                                ))}
                            </TechWrap>
                        ) : null}
                        <LinksWrap>
                            <VisitUrl href={project.url} alt={project.title} target="_blank">
                                Visit website
                                <LinkIcon src={LinkImg} alt="Visit"/>
                            </VisitUrl>
                            {project.descUrl ? (
                                <VisitUrl href={project.descUrl} alt={project.title} target="_blank">
                                    Visit description website
                                    <LinkIcon src={LinkImg} alt="Visit"/>
                                </VisitUrl>
                            ): null}
                        </LinksWrap>
                    </TextWrap>
                </Wrap>
            </Container>
            
            {project.features ? (
                <div style={{marginTop: 50, paddingTop: 50, paddingBottom: 50, background: '#2a2a2a'}}>
                    <Container>
                        <SectionTitle>project features</SectionTitle>
                        <div>
                            {project.features.map((feature, index) => (
                                <ProjectFeature feature={feature} key={index}/>
                            ))}
                        </div>
                    </Container>
                </div>
            ) : null}

            {project.screens ? (
                <div style={{marginTop: 50, paddingTop: 50, paddingBottom: 50, background: '#2a2a2a'}}>
                    <Container>
                        <SectionTitle>project screens</SectionTitle>
                        <Slider {...sliderSet} style={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                            {project.screens.map((screen, index) => (
                                <ProjectScreen screen={screen} key={index}/>
                            ))}
                        </Slider>
                    </Container>
                </div>
            ) : null}
        </PageWrap>
    )
}

const PageWrap = styled.div`
    padding-top: 30px;
`;

const BackBtn = styled.button`
    border: 0;
    background: none;
`;

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding-top: 30px;
    @media ${breakpoint.device.tablet}{
        grid-template-columns: repeat(1, 1fr);
    }
`;

const ImgWrap = styled.div`
    width: 100%;
    height: 100%;
    order: 1;
    @media ${breakpoint.device.tablet}{
        order: 2;
    }
`;

const Img = styled.img`
    width: 100%;
`;

const TextWrap = styled.div`
    order: 2;
    @media ${breakpoint.device.tablet}{
        order: 1;
    }
`;

const Title = styled.h1`
    font-size: 4vw;
    z-index: 1;
    -webkit-text-stroke: 1px rgba(230, 230, 230, 1);
    color: transparent;
    margin: 0;
    font-weight: 400;
    @media ${breakpoint.device.tablet}{
        font-size: 9vw;
    }
`;

const Desc = styled.p`
    color: #e6e6e6;
`;

const VisitUrl = styled.a`
    border: 1px solid #e6e6e6;
    padding: 10px 20px;
    margin-top: 20px;
    background: #2a2a2a;

`;

const LinksWrap = styled.div`
    display: flex;
    & ${VisitUrl}{
        margin-right: 20px;
    }
`;

const LinkIcon = styled.img`
    margin-left: 10px;
    width: 15px;
`;

const TechWrap = styled.div`
    display: flex;
    align-items: center;
`;

export default ProjectLayout;