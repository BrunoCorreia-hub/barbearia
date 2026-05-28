import styled from "styled-components";

export const CalendarLayout = styled.div`
    padding: 2rem;
`;

export const CalendarBox = styled.div``;

export const CalHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10rem;
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
    font-size: 2rem;
    font-weight: bold;
`;

export const CalGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 60px);
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
`;

export const Callabel = styled.label`
    color: ${props => props.theme.white};
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    padding: 0.8rem 0;
    border-radius: 0.5rem;
`;

export const CalDay = styled.button`
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    border: 0.2rem solid ${({ $today, $selected }) => {
        if($today) return "orange";
        if($selected) return "green";
        return "transparent"
    }};
    background: #111;
    color: ${({ $today }) => (($today ? "orange" : "#fff"))};
    font-size: 2rem;
    opacity: ${({ $disabled }) => $disabled ? 0.4 : 1};
    pointer-events: ${({ $disabled }) => ($disabled ? "none" : "all")};

    &:hover {
        transform: scale(1.05);
    }
`;
