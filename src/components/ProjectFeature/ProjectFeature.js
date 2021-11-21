import React from 'react';

// style
import styled from 'styled-components';

const ProjectFeature = ({feature}) =>{
    return(
        <FeatureWrap>
            <div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
            </div>
            
            <div>
                <img src={feature.img} alt=""/>
            </div>
        </FeatureWrap>
    )
}

const FeatureWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px;
`;

export default ProjectFeature;