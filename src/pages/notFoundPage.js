import React from "react";

// style
import styled from 'styled-components';

// img
import ImageUlr from '../assets/img/main-img.jpg'

const notFoundPage = () =>{
    return(
        <Container>
            <div>
                <Wrap>
                    <Text>404</Text>
                    <Image src={ImageUlr} alt="Page not found"/>
                </Wrap>
                <LinkWrap>
                    <HomeUrl href="/">Go to home page</HomeUrl> 
                </LinkWrap>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
`;

const Wrap = styled.div`
    position: relative;
    overflow: hidden;
`;

const Text = styled.h1`
    margin: 0;
    font-size: 30vw; 
    text-transform: uppercase;
    font-family: 'ProFontWindows',sans-serif;
    color: #fff;
`;

const Image = styled.img`
    position: absolute;
    top: 0;
    left: -20px;
    width: 100%; 
    mix-blend-mode: darken;
`;

const LinkWrap = styled.div`
    text-align: center;
`;

const HomeUrl = styled.a`
    color: #fff;
    font-size: 25px;
    font-family: 'ProFontWindows',sans-serif;
`;

export default notFoundPage;