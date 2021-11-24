import React from 'react';

// style
import styled from 'styled-components';

const ProjectScreen = ({screen}) =>{
    return(
        <SliderItem>
            <SliderImg src={screen.url} alt="Slider item"/>
        </SliderItem>
    )
}

const SliderItem = styled.div`
    width: 100%;
    height: 80vh;
`;

const SliderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    height: 80vh;
`;

export default ProjectScreen;