import React, {useRef, useState} from 'react';

// libs
import {TimelineLite, Expo} from 'gsap';

// style
import styled from 'styled-components';

// img
import MenuIcon from '../../assets/img/menu-icon.svg';

const Header = () => {
    const [open, setOpen] = useState(false);

    let overlay = useRef(null);
    
    const openMenu = () =>{
        let tl = new TimelineLite({pause: true});
        let menuItem = document.querySelectorAll("li");

       

        if(open === false){
            tl.to(overlay, 1.9, {
                top: 0,
                ease: Expo.easeInOut,
            });
            tl.staggerFromTo(menuItem, 1, {y: 100, opacity: 0, ease: Expo.easeOut}, {y: 0, opacity: 1, ease: Expo.easeOut}, 0.1);
            tl.play();
            setOpen(true);
        }else{
            tl.staggerFromTo(menuItem, 1, {y: 0, opacity: 1, ease: Expo.easeOut}, {y: 100, opacity: 0, ease: Expo.easeOut}, 0.1);
            tl.to(overlay, 1.9, {
                top: '-100%',
                ease: Expo.easeInOut,
            });
            tl.play();
            setOpen(false);
        }
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
                    <MenuItem><a href="/#">About</a></MenuItem>
                    <MenuItem><a href="/#">Experience</a></MenuItem>
                    <MenuItem><a href="/#">Projects</a></MenuItem>
                    <MenuItem><a href="/#">Contact</a></MenuItem>
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

const MenuItem = styled.li`
    &:not(:last-child) {
        margin-right: 120px;
    }
`;


export default Header;
