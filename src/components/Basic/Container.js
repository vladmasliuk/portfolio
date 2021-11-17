import React from "react";

// style
import styled from 'styled-components';

const Container = ({children}) =>{
    return(
        <ContainerBlock>
            {children}
        </ContainerBlock>
    )
}

const ContainerBlock = styled.div`
    max-width: 1620px;
    padding: 0 15px;
    margin: 0 auto;
`;

export default Container;