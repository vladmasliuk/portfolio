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
    height: 750px
`;

const SliderImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default ProjectScreen;