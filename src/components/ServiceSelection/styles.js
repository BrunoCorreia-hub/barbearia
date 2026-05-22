import styled from "styled-components";
import { fadeSlideUp } from "../../styles/animations";

export const ContainerService = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 2.5rem;
    margin-bottom: 5rem;
    animation: ${fadeSlideUp} 0.6s ease;
    border-bottom: 0.1rem solid ${props => props.theme.white};
    padding: 0 0 3rem 0;
`;

export const ServiceCard = styled.div`
    border: 0.2rem solid ${props => props.theme.white};
    border-radius: 1.5rem;
    padding: 2rem 0.5rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    gap: 4rem;
    cursor: pointer;
    box-shadow: ${({ $selected, theme }) => $selected ? `0 0 9px ${theme.gren}` : `0 0 5px ${theme.orange}`};
    transition: transform 0.4s ease, filter 0.4s ease;
    position: relative;
    padding: 2rem;

    &:hover{
        transform: scale(1.03) translateX(-4px);
    }
`;

export const SelectedBadged = styled.div`
    color: ${props => props.theme.gren};
    position: absolute;
    right: 3rem;
    font-size: 5rem;
    font-weight: bold;
`;

export const Name = styled.h1`
    color: ${props => props.theme.white};
    font-weight: bold;
    font-size: 3rem;
`;

export const Price = styled.h2`
    color: ${props => props.theme.orange};
    font-size: 2.5rem;
`; 

export const Duration = styled.p`
    color: ${props => props.theme.darkGray};
    font-size: 2rem;
`;