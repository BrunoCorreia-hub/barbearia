import styled from "styled-components";

export const TimeBox = styled.div`
    padding: 2.5rem;
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
`;

export const TimeSlot = styled.button`
    font-size: 1.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${props => props.theme.gray};
    border: 0.2rem solid ${({ $selected }) => ($selected ? "orange" : "#fff")};
    color: ${({ $selected }) => ($selected ? "orange" : "white")};
    transition: 0.4s ease;
    &:hover{
        transform: scale(1.05);
    }
`;

export const Paragraph = styled.h2`
    color: ${props => props.theme.orange};
    font-size: 2rem;
    text-align: center;
`;