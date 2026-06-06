import styled from "styled-components";

export const Paragraph = styled.div`
    padding: 2rem;
    background-color: ${props => props.theme.backgroundSecond};
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem ${props => props.theme.ambar};
    text-align: center;
    color: ${props => props.theme.text};
    font-size: 2rem;
`;