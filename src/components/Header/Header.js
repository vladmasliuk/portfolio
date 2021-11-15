import React from 'react';

// style
import styled from 'styled-components';

// img
import MenuIcon from '../../assets/img/menu-icon.svg';

const Header = () => {
    return (
        <MenuBtnWrap>
            <MenuBtn>
                <MenuBtnIcon src={MenuIcon} alt="Menu icon"/>
            </MenuBtn>
        </MenuBtnWrap>
    )
}

const MenuBtnWrap = styled.div`
    position: fixed;
    right: 20px;
    top: 20px;
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

export default Header;
