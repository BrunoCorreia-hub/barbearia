import styled from "styled-components";

export const CalendarLayout = styled.div`
    padding: 2rem;
`;

export const CalendarBox = styled.div``;

export const CalHeader = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3rem;
`;

export const CalNav = styled.button`
    font-size: 5rem;
    font-weight: bold;
    padding: 0;
    background: transparent;
    color: ${props => props.theme.white};
    border: none;
    transition: 0.4s ease;

    &:hover{
        transform: scale(1.10);
        color: ${props => props.theme.orange};
    }
`;

export const CalendarMonth = styled.p`
    color: #fff;
`;

export const CalGrid = styled.div`
    display: flex;
    justify-content: space-evenly;
    border: 0.1rem solid ${props => props.theme.white};
    padding: 0.7rem 0;

`;

export const Callabel = styled.label`
    color: ${props => props.theme.white};
`;

export const CalDay = styled.div`
    
`;