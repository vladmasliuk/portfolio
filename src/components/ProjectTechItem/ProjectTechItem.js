import React from 'react';

// style
import styled from 'styled-components';

function ProjectTechItem({techItem}) {
    return (
        <Item>
            {techItem.name}
        </Item>
    )
}

const Item = styled.span`
    color: #fff;
    background: #2a2a2a;
    border: 1px solid #e6e6e6;
    border-radius: 8px;
    padding: 5px 10px;
    margin-right: 10px;
    font-size: 10px;
`;

export default ProjectTechItem;
