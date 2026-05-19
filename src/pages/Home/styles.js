import styled from "styled-components";
import { fadeSlideUp, fadeIn } from "../../styles/animations";

export const Container = styled.div`
    background-color: ${props => props.theme.background};
    padding: 1.5rem;
    gap: 1rem;
    width: 100vw;
    min-height: 100vh;
    transition: background-color 0.3s ease;
`;

export const ContainerSection = styled.div`
    margin-top: 8rem;
    padding: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    animation: ${fadeSlideUp} 0.8s ease forwards;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Title = styled.h1`
    color: ${props => props.theme.secondWhite};
    font-size: 5rem;
    font-family: "Playfair Display", serif;
    opacity: 0;
    animation: ${fadeIn} 0.7s ease 0.2s forwards;

    span{
        color: ${props => props.theme.gold};
        display: inline-block;
        animation: color 0.3s ease;
    }
`;

export const Sub = styled.h2`
    color: ${props => props.theme.darkGray};
    margin-top: 2rem;
    opacity: 0;
    animation: ${fadeIn} 0.7s ease 0.4s forwards;
`;

export const Image = styled.img`
    width: 25rem;
    height: auto;
    transition: transform 0.4s ease, filter 0.4s ease;

    &:hover{
        transform: scale(1.03) translateY(-4px);
        filter: brightness(1.05);
    }
`;

export const Contatos = styled.div`
    display: flex;
    gap: 2rem;
    padding-left: 17rem;
    animation: ${fadeSlideUp} 0.8s ease forwards;
`;