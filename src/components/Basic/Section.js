import React from "react";

// style
import styled from 'styled-components';

const Section = ({children}) =>{
    return(
        <SectionWrap>
            {children}
        </SectionWrap>
    )
}

const SectionWrap = styled.div`
    padding: 50px 0;
`;

export default Section;