import React from 'react';

// style
import styled from 'styled-components';

// img
import MainImg from '../../assets/img/main-img.jpg';

const MainSection = () =>{
    return(
        <MainSectionWrap style={{backgroundImage: `url(${MainImg})`}}>
            <MainSectionOverlay>
                <TitleWrap>
                    <Title>Vlad Masliuk</Title>
                    <Title>Portfolio</Title>
                </TitleWrap>
            </MainSectionOverlay>
        </MainSectionWrap>
    )
}

const MainSectionWrap = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`;

const MainSectionOverlay = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .4);
`;

const TitleWrap = styled.div`
    text-align: center;
    transform: rotate(-15deg);
`;

const Title = styled.h1`
    color: #3cff00;
    font-size: 8vw;
    font-family: True Lies;
    font-weight: 500;
`;

export default MainSection;