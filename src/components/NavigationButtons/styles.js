import styled from "styled-components";
import { fadeHeader } from "../../styles/animations"

export const BottomBar = styled.div`
    display: flex;
    gap: 3rem;
`;

export const BackBtn = styled.button`
    font-size: 2rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    background: transparent;
    border: 0.15rem solid ${props => props.theme.lightGray};
    color: ${props => props.theme.lightGray};
    transition: 0.4s ease;
    animation: ${fadeHeader} 0.9s ease;

    &:hover{
        background-color: ${props => props.theme.mainBlack};
        transform: scale(1.05);
        color: ${props => props.theme.orange};
    }
`;