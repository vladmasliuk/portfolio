import React from "react";

// style
import styled from 'styled-components';

const Section = ({children, light}) =>{
    return(
        <SectionWrap style={light ? {background: "#2a2a2a"} : null}>
            {children}
        </SectionWrap>
    )
}

const SectionWrap = styled.div`
    padding: 100px 0;
`;

export default Section;