import React, {useReducer, useRef} from 'react';
import { Link } from 'react-router-dom';

// style
import styled from 'styled-components';

const initialState = {
    opacity: 0,
    parallaxPos: {x: 0, y: -20},
}

function reducer (state, action){
    switch(action.type){
        case "CHANGE/OPACITY":{
            return{
                ...state,
                opacity: action.payload
            }
        }

        case "MOUSE/POS":{
            return{
                ...state,
                parallaxPos: action.payload
            }
        }

        default: {
            throw new Error();
        }
    }
}

const ProjectItem = ({project}) =>{
    const item = useRef(null);
    const[state, dispatch] = useReducer(reducer, initialState);

    const parallax = (event) =>{
        const speed = -5;
        const x = (window.innerWidth - event.pageX * speed) / 100;
        const y = (window.innerHeight - event.pageY * speed) / 100;

        dispatch({type: 'MOUSE/POS', payload:{x, y}});
    }

    const handleMouseEnter = () =>{
        dispatch({type: 'CHANGE/OPACITY', payload: 1});
        item.current.addEventListener('mousemove', parallax)
    }
    
    const handleMouseLeave = () =>{
        item.current.removeEventListener('mousemove', parallax)
        dispatch({type: 'CHANGE/OPACITY', payload: 0});
        dispatch({type: 'MOUSE/POS', payload: initialState.parallaxPos});
    }

    return(
        <Item>
            <Link to={`/project/${project.id}`} 
                ref={item} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <ItemLink>{project.title}</ItemLink>
                <ItemLinkClone>{project.title}</ItemLinkClone>
            </Link>
            <ItemImg
                style={{
                    opacity: `${state.opacity}`,
                    transform: `translate3d(${state.parallaxPos.x}px, ${state.parallaxPos.y}px, 0px)`,
                }}
                src={project.img}
                alt={project.title}
            />
        </Item>
    )
}

const ItemLinkClone = styled.h3`
    font-size: 7vw;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    color: #fff;
    clip-path: inset(0 100% 0 0);
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    margin: 0;
    font-weight: 400;
`;

const Item = styled.li`
    position: relative;
    display: block;
    &:hover ${ItemLinkClone} {
        clip-path: inset(0 0 0 0) !important;
    }
`;

const ItemImg = styled.img`
    position: fixed;
    left: 45vw;
    top: 10vh;
    width: auto;
    height: clamp(200px, 15vw, 15vw);
    objetive-fit: cover;
    transition: transform 1s cubic-bezier(0.165, 0.84, 0.44, 1);
    pointer-events: none;
`;

const ItemLink = styled.h3`
    font-size: 7vw;
    z-index: 1;
    -webkit-text-stroke: 1px rgba(230, 230, 230, 1);
    color: transparent;
    margin: 0;
    font-weight: 400;
`;

export default ProjectItem;