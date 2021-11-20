import React from "react";

// style
import styled from 'styled-components';

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
`;

export default SectionTitle;