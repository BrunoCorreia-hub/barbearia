import styled from "styled-components";

export const AboutContainer = styled.div`
    background-color: ${props => props.theme.backgroundSecond};
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 0.5rem ${props => props.theme.ambar};
    margin-top: 5rem;
    
    h1{
        color: ${props => props.theme.ambar};
        margin-bottom: 2rem;
        font-weight: bold;
        font-size: 3rem;
        text-align: center;
    }
    p{
        color: ${props => props.theme.text};
        font-size: 2rem;
    }
`;