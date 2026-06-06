import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const TimeBox = styled.div`
    padding: 2.5rem;
    width: 55rem;
    animation: ${fadeIn} 0.6s ease;
    background-color: ${props => props.theme.backgroundSecond};
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem ${props => props.theme.ambar};
`; 

export const TimeTitle = styled.h1`
    color: ${props => props.theme.white};
    margin-bottom: 3rem;
    text-align: center;
`;

export const TimeGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const TimeFragment = styled.div`
     p{
        color: ${props => props.theme.white};
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
`;

export const Periodos = styled.div`
    border-bottom: 0.1rem solid white;
    padding-bottom: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`;

export const TimeSlot = styled.button`
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({ $isActive }) => ($isActive ? "green" : "black")};
    border: 0.1rem solid ${({ $isActive }) => ($isActive ? "green" : "#fff")};
    color: ${props => props.theme.white};
    transition: 0.4s ease;
    &:hover{
        transform: scale(1.02);
        background-color: #708090;
    }
`;

export const GridTime = styled.div`
    background-color: ${props => props.theme.lightGray};
    padding: 0.5rem 1rem;
    border-radius: 0.6rem;
    border: 0.2rem solid ${props => props.theme.green}
`;

export const SelectionMessage = styled.h1`
    color: ${props => props.theme.green};
    font-weight: 400;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.7rem;

    p{
        font-weight: bold;
    }
`;

export const SelectionMessageOption = styled.h2`
    border: 0.1rem solid ${props => props.theme.white};
    border-radius: 0.2rem;
    color: ${props => props.theme.white};
    padding: 0.5rem 1rem;
    font-weight: 300;
`;

export const Paragraph = styled.h2`
    color: ${props => props.theme.orange};
    font-size: 2rem;
    text-align: center;
`;