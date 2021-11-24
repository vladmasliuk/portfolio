import React from 'react';

// lib
import Baffle from "baffle-react";

// style
import styled from 'styled-components';

// img
import MainImg from '../../../assets/img/main-img.jpg';

// Breakpoints
import breakpoint from '../../../breakpoint/breakpoint';

const MainSection = () =>{
    return(
        <MainSectionWrap style={{backgroundImage: `url(${MainImg})`}}>
            <MainSectionOverlay>
                <TitleWrap>
                    <Title>
                        Vladyslav Masliuk
                    </Title>
                    <Baffle
                    speed={150}
                    characters="░▒< ▒><>▓ <█░>▒ ▓█▒ ▓<▒/█ ▓░▓░ ▓▒░ █░▒░ █▓█░"
                    exclude={[" ", "!"]}
                    obfuscate={false}
                    update={true}
                    revealDuration={5000}
                    >
                        Web developer
                    </Baffle>
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
    & span{
        color: #3cff00;
        font-size: 8vw;
        font-family: True Lies;
        font-weight: 500;
        display: block;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        @media ${breakpoint.device.tablet}{
            font-size: 12vw;
        }
    }
`;

const Title = styled.h1`
    color: #3cff00;
    font-size: 8vw;
    font-family: True Lies;
    font-weight: 500;
    @media ${breakpoint.device.tablet}{
        font-size: 12vw;
    }
`;

export default MainSection;