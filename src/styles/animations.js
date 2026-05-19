import { keyframes } from "styled-components";

export const fadeSlideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(40px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
`;

export const scaleIn = keyframes`
    from { opacity: 0; transform: scale(0.95); }
    to   { opacity: 1; transform: scale(1); }
`;

export const fadeHeader = keyframes`
    from{ opacity: 0; transform: translateX(-40px); }
    to  { opacity: 1; transform: translateX(0); }
`;