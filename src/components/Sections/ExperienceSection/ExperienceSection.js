import React from 'react';

// components
import Container from '../../Basic/Container';
import Section from '../../Basic/Section';
import SectionTitle from '../../Basic/SectionTitle';

// style
import styled from 'styled-components';

const items = [
    {
        date: "20th may, 2021",
        title: "FIDE",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
    {
        date: "20th may, 2021",
        title: "Freelancer",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
    {
        date: "20th may, 2021",
        title: "SGR",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab laudantium voluptatibus aut eos placeat laborum, quibusdam exercitationem labore.",
    },
]

const ExperienceSection = () =>{
    return(
       <>
            <Section>
                <Container>
                    <SectionTitle>
                        03. Experience
                    </SectionTitle>
                    <TimelineWrap>
                        <Timeline>
                            <List>
                                {items.map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemContent>
                                            <Date>{item.date}</Date>
                                            <Title>{item.title}</Title>
                                            <Desc>{item.desc}</Desc>
                                        </ListItemContent>
                                </ListItem>
                                ))}
                            </List>
                        </Timeline>
                    </TimelineWrap>
                </Container>
            </Section>
       </>
    )
}

const TimelineWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 50px;
`;

const Timeline = styled.div`
    width: 80%;
    position: relative;
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background-color: gray;
    }
`;

const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const ListItem = styled.li`
    width: 50%;
    position: relative;
    padding: 20px;
    background-color: #2a2a2a;
    color: white;
    border-radius: 10px;
    &:before{
        content: "";
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: gray;
        top: 0px;
    }
    &:not(:last-child){
        margin-bottom: 50px;
    }
    &:nth-child(odd){
        float: left;
        clear: right;
        transform: translateX(-70px);
        border-radius: 20px 0px 20px 20px;
        &:before {
            transform: translate(50%, -50%);
            right: -30px;
          }
    }
    &:nth-child(even){
        float: right;
        clear: left;
        transform: translateX(70px);
        border-radius: 0px 20px 20px 20px;
        &:before {
            transform: translate(-50%, -50%);
            left: -30px;
        }
    }
`;

const ListItemContent = styled.div`
    padding: 20px;
    background-color: #2a2a2a;
    color: white;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const Date = styled.h6`
    position: absolute;
    top: -50px;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 2px;
`;

const Title = styled.h3`
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 10px;
`;

const Desc = styled.p`
    font-size: 16px;
    line-height: 30px;
    font-weight: 300;
`;

export default ExperienceSection;