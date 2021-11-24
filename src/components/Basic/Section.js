import React from "react";

// style
import styled from 'styled-components';

// Breakpoints
import breakpoint from '../../breakpoint/breakpoint';

const Section = ({children, light}) =>{
    return(
        <SectionWrap style={light ? {background: "#2a2a2a"} : null}>
            {children}
        </SectionWrap>
    )
}

const SectionWrap = styled.div`
    padding: 100px 0;
    @media ${breakpoint.device.tablet}{
        padding: 50px 0;
    }
`;

export default Section;