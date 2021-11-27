import React, {useRef, useState} from 'react';

// libs
import {TimelineLite, Expo} from 'gsap';
import Scroll from 'react-scroll'
import CSSPlugin from 'gsap/CSSPlugin';

// style
import styled, { keyframes } from 'styled-components';

// img
import MenuIcon from '../../assets/img/menu-icon.svg';
import menuAbout from '../../assets/img/menu-about.jpg'
import menuSkills from '../../assets/img/menu-skills.jpg'
import menuEx from '../../assets/img/menu-ex.jpg'
import menuProjects from '../../assets/img/menu-proj.jpg'
import menuContact from '../../assets/img/menu-con.jpg'

// Breakpoints
import breakpoint from '../../breakpoint/breakpoint';

const Header = () => {
    const [open, setOpen] = useState(false);
    const C = CSSPlugin; 

    let overlay = useRef(null);
    
    const openMenu = () =>{
        let tl = new TimelineLite({pause: true});
        let menuItem = document.querySelectorAll("#main-menu li");

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
                top: '-120%',
                ease: Expo.easeInOut,
            });
            tl.play();
            setOpen(false);
        }
    }

    const ScrollLink = Scroll.Link;

    return (
        <>
            <MenuBtnWrap>
                <MenuBtn onClick={openMenu}>
                    <MenuBtnIcon src={MenuIcon} alt="Menu icon"/>
                </MenuBtn>
            </MenuBtnWrap>

            <MenuOverlay ref={el=> overlay = el}>
                <Menu id="main-menu">
                    <MenuItem>
                        <ScrollLink 
                            to="about-sec" 
                            spy={true} 
                            smooth={true} 
                            duration={1000} 
                            onClick={openMenu}
                        >
                            01. About
                        </ScrollLink>
                    </MenuItem>
                    <MenuItem>
                        <ScrollLink 
                            to="skills-sec" 
                            spy={true} 
                            smooth={true} 
                            duration={1000} 
                            onClick={openMenu}
                        >
                            02. Skills
                        </ScrollLink>
                    </MenuItem>
                    <MenuItem>
                        <ScrollLink 
                            to="experience-sec" 
                            spy={true} 
                            smooth={true} 
                            duration={1000} 
                            onClick={openMenu}
                        >
                            03. Experience
                        </ScrollLink>
                    </MenuItem>
                    <MenuItem>
                        <ScrollLink 
                            to="projects-sec" 
                            spy={true} 
                            smooth={true} 
                            duration={1000} 
                            onClick={openMenu}
                        >
                            04. Projects
                        </ScrollLink>
                    </MenuItem>
                    <MenuItem>
                        <ScrollLink 
                            to="contact-sec" 
                            spy={true} 
                            smooth={true} 
                            duration={1000} 
                            onClick={openMenu}
                        >
                            05. Contact
                        </ScrollLink>
                    </MenuItem>
                </Menu>
            </MenuOverlay>
        </>
    )
}

// animation
const fadeIn = keyframes`
    0% {
        opacity: 0;
        top: -160px;
    }
    50% {
        opacity: 1;
        top: -180px;
    }
    100% {
        opacity: 1;
        top: -180px;
    }
`;

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
    top: -120%;
    left: 0;
    z-index: 4;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Menu = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    @media ${breakpoint.device.tablet}{
        display: block;
    }
`;

const MenuItem = styled.li`
    &:not(:last-child) {
        margin-right: 120px;
        @media ${breakpoint.device.laptop}{
            margin-right: 50px;
        }
        @media ${breakpoint.device.tablet}{
            margin-right: 0;
            margin-bottom: 20px;
        }
    }
    & a{
        font-family: 'ProFontWindows', sans-serif;
        text-transform: uppercase;
        position: relative;
        &:hover::before{
            content: "";
            z-index: -1;
            width: 300px;
            height: 400px;
            display: block;
            position: absolute;
            top: -180px;
            left: -30px;
            transition: 1s;
            animation: ${fadeIn} 2s ease-in-out;
            pointer-eevents: none;
            @media ${breakpoint.device.tablet}{
                width: 0 !important;
            }
        }
    }
    &:first-child a:hover:before {
        background: url(${menuAbout});
        background-size: cover;
        background-position: center;
    }
    &:nth-child(2) a:hover::before {
        background: url(${menuSkills});
        background-size: cover;
        background-position: center;
    }
    &:nth-child(3) a:hover::before {
        background: url(${menuEx});
        background-size: cover;
        background-position: center;
    }
    &:nth-child(4) a:hover::before {
        background: url(${menuProjects});
        background-size: cover;
        background-position: center;
    }
    &:last-child a:hover::before {
        background: url(${menuContact});
        background-size: cover;
        background-position: center;
    }
    
`;

export default Header;
