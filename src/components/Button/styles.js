import styled from "styled-components";

export const ContainerButton = styled.button`
    background: transparent;
    border: 0.2rem solid #334;
    color: #ccc;
    border-radius: 0.8rem;
    padding: 0.8rem 1.3rem;
    font-size: 1.5rem;
    transition: 0.3s;
    width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

    &:hover{
        border-color: #666;
        color: #fff;
        background-color: #242529;
    }

`;