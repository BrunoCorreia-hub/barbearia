import styled from "styled-components";

export const FormBox = styled.div`
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

export const Summary = styled.div`
    width: 40rem;
    background-color: ${props => props.theme.backgroundSecond};
    padding: 2rem;
    border-radius: 1rem;
    border: 0.1rem solid ${props => props.theme.textSecond};
`;

export const Title = styled.h1`
    color: ${props => props.theme.textSecond};
    margin-bottom: 0.8rem;
    padding: 0 0 1rem 0;
    font-weight: 400;  
    border-bottom: 0.1rem solid ${props => props.theme.textSecond};
`;

export const SummaryGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    border-bottom: 0.1rem solid ${props => props.theme.textSecond};
    margin-bottom: 2rem;
`;

export const SummaryRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5rem;

    span{
        color: ${props => props.theme.white};
        font-size: 2rem;
    }
    h2{
        color: ${props => props.theme.bronze};
        font-size: 2rem;
    }
`;

export const FieldGroup = styled.div`
    width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${props => props.theme.backgroundSecond};
    padding: 2rem;
    border-radius: 1rem;
    border: 0.1rem solid ${props => props.theme.textSecond};
    min-height: stretch;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Label = styled.label`
    color: ${props => props.theme.textSecond};
    font-size: 1.5rem;
`;

export const Input = styled.input`
    padding: 1rem;
    background-color: transparent;
    border-radius: 0.5rem;
    border: 0.1rem solid ${props => props.theme.secondBlack};
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.text};
`;