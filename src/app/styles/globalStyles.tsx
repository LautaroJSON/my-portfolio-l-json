import { createGlobalStyle, keyframes } from "styled-components"

const bgAnimation = keyframes`
    0%{background-position: 0 50%; }
    50%{background-position: 100% 50%;}
    100%{background-position: 0 50%; }
`
export const GlobalStyles = createGlobalStyle`
        
    body{
        font-family: "Roboto", sans-serif;
        margin: 0;
        animation: ${bgAnimation} 10s ease-in-out infinite;
        background: linear-gradient(165deg, rgba(7,1,27,1) 5%, rgba(23,1,64,1) 40%, rgba(38,0,127,1) 65%, rgba(149,29,37,1) 100%);
        background-size: 125% 125%;
    }
`
