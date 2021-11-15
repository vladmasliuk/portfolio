import React from 'react';

// style
import styled from 'styled-components';

// img
import MainImg from '../../assets/img/main-img.jpg';

const MainSection = () =>{
    return(
        <MainSectionWrap style={{backgroundImage: `url(${MainImg})`}}>
            
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

// const MainSectionImg = styled.img`
//     width: 100%;
//     height: 100%;
// `;

export default MainSection;