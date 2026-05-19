import styled from "styled-components";
import { fadeHeader } from "../../styles/animations";

export const Agendamento = styled.div`
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    padding: 7rem;
    min-width: 100%;
`;

export const Container = styled.div`
    animation: ${fadeHeader} 0.6s ease;
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