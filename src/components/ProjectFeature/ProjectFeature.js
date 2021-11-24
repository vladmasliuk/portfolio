import React from 'react';

// style
import styled from 'styled-components';

// Breakpoints
import breakpoint from '../../breakpoint/breakpoint';

const ProjectFeature = ({feature}) =>{
    return(
        <FeatureWrap>
            <TextWrap>
                <Title>{feature.title}</Title>
                <Desc>{feature.desc}</Desc>
            </TextWrap>
            
            <ImgWrap>
                <Img src={feature.img} alt=""/>
            </ImgWrap>
        </FeatureWrap>
    )
}

const TextWrap = styled.div``;

const ImgWrap = styled.div`
    width: 100%;
    height: 100%;
`;

const FeatureWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
    padding: 25px 0;
    &:not(:last-child){
        border-bottom: 1px solid rgba(230,230,230, .1);
    }
    @media ${breakpoint.device.tablet}{
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
    @media ${breakpoint.device.mobile}{
        grid-gap: 0;
    }
`;

const Img = styled.img`
    width: 100%;
`;

const Title = styled.h3`
    font-size: 3vw;
    -webkit-text-stroke: 1px rgba(230,230,230,1);
    color: transparent;
    margin: 0;
    font-weight: 400;
    @media ${breakpoint.device.tablet}{
        font-size: 7vw;
    }
`;

const Desc = styled.p`
    color: #e6e6e6;
`;

export default ProjectFeature;