import styled from "styled-components";
import { fadeHeader } from "../../styles/animations";

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    padding: 2rem;
    position: fixed;
    top: 0;
    right: 0;
    border-bottom: 0.2rem solid #2b2a2a;
    z-index: 99;
    background-color: ${props => props.theme.background};
`;

export const Title = styled.h1`
   color: #e5e4e7;
   font-size: 3rem;
   font-family: "Rye", serif;
   font-weight: 400;
   font-style: normal;
   animation: ${fadeHeader} 1s ease;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  animation: ${fadeHeader} 1s ease;
  a { 
    color: #666;
    font-size: 2rem;
    text-decoration: none;
    transition: 0.3s ease;
      &:hover { color: #ccc; transform: scale(1.05) } }
`;