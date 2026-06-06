import styled from "styled-components";

export const FormBox = styled.form`
    padding: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 3rem;
`;

export const Summary = styled.div`
    background-color: ${props => props.theme.backgroundSecond};
    padding: 2rem;
    border-radius: 1rem;
    border: 0.1rem solid ${props => props.theme.textSecond};
`;

export const Title = styled.h1`
    color: ${props => props.theme.textSecond};
    margin-bottom: 0.8rem;
    font-weight: 400;  
`;

export const SummaryGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;
    border-top: 0.1rem solid ${props => props.theme.textSecond};
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
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: ${props => props.theme.backgroundSecond};
    padding: 2rem;
    border-radius: 1rem;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const Label = styled.label`
    color: ${props => props.theme.textSecond};
    font-size: 2rem;
`;

export const Input = styled.input`
    padding: 0.5rem;
    background-color: transparent;
    border-radius: 0.5rem;
    border: 0.1rem solid ${props => props.theme.secondBlack};
    font-size: 2rem;
    font-weight: 600;
    color: ${props => props.theme.secondBlack};
`;