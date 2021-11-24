import React from "react";

// style
import styled from 'styled-components';

// Breakpoints
import breakpoint from '../../breakpoint/breakpoint';

const SectionTitle = ({children}) =>{
    return(
        <Title>
            {children}
        </Title>
    )
}

const Title = styled.h2`
    font-family: 'ProFontWindows', sans-serif;
    color: #3cff00;
    font-size: 18px;
    margin: 0 0 50px 0;
    text-transform: uppercase;
    letter-spacing: 5px;
    @media ${breakpoint.device.tablet}{
        margin: 0 0 25px 0;
    }
`;

export default SectionTitle;