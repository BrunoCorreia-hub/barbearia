import styled from "styled-components";
import { fadeHeader, fadeIn } from "../../styles/animations";

export const Agendamento = styled.div`
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    padding: 7rem;
    min-width: 100%;
`;

export const Container = styled.div`
    animation: ${fadeHeader} 0.6s ease;
`;

export const GridCalTime = styled.div`
    display: flex;
    justify-content: center;
    gap: 5rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
`;

export const StepIndicator = styled.h2`
    color: ${props => props.theme.darkGray};
    margin-bottom: 1rem;
`;

export const StepTitle = styled.h1`
    color: ${props => props.theme.lightGray};
`;

export const ProgressBar = styled.div``;

export const ProgressFill = styled.div``;

export const SuccessContainer = styled.div`
    background-color: ${props => props.theme.backgroundSecond};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    span{
        color: ${props => props.theme.green};
        font-size: 10rem;
        animation: ${fadeIn} 0.6s ease;
    }
    h1{
        color: ${props => props.theme.text};
        font-size: 3rem;
        font-weight: bold;
        animation: ${fadeIn} 0.6s ease;
    }
    p{
        color: ${props => props.theme.text};
        font-size: 2rem;
        animation: ${fadeIn} 0.6s ease;
    }
`;