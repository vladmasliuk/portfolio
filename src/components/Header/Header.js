import React, {useRef, useState} from 'react';

// libs
import {TimelineLite, Expo} from 'gsap';

// style
import styled from 'styled-components';

// img
import MenuIcon from '../../assets/img/menu-icon.svg';

const Header = () => {
    let overlay = useRef(null);    
    
    const openMenu = () =>{
        const t1 = new TimelineLite({pause: true});

        t1.to(overlay, 1.9, {
            top: 0,
            ease: Expo.easeInOut,
        });

        const menuItem = document.querySelectorAll("li");
        t1.staggerFrom(menuItem, 1, {y: 100, opacity: 0, ease: Expo.easeOut}, 0.1);

    }

    return (
        <>
            <MenuBtnWrap>
                <MenuBtn onClick={openMenu}>
                    <MenuBtnIcon src={MenuIcon} alt="Menu icon"/>
                </MenuBtn>
            </MenuBtnWrap>

            <MenuOverlay ref={el=> overlay = el}>
                <Menu>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#about-section">About</a></li>
                    <li><a href="#about-section">About</a></li>
                </Menu>
            </MenuOverlay>
        </>
    )
}

// menu btn 
const MenuBtnWrap = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
    z-index: 5;
`;

const MenuBtn = styled.button`
    background: #000;
    border: 0;
    padding: 0;
`;

const MenuBtnIcon = styled.img`
    width: 20px;
    height: 20px;
    padding: 15px 17px;
`;

// menu overlay
const MenuOverlay = styled.div`
    width: 100%;
    height: 100vh;
    background: #000;
    position: fixed;
    top: -100%;
    left: 0;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`;

const Menu = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
`;

export default Header;
