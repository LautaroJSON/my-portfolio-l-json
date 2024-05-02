import { createGlobalStyle, keyframes } from "styled-components"

const bgAnimation = keyframes`
    from{background-position: 0% 0%; }
    to{background-position: 100% 100%;}
`
export const GlobalStyles = createGlobalStyle`
        
    body{
        font-family: "Roboto", sans-serif;
        font-optical-sizing: auto;
        margin: 0;
        animation: ${bgAnimation} 7s ease-in-out infinite alternate forwards;
        background: linear-gradient(165deg, rgba(7,1,27,1) 0%, rgba(23,1,64,1) 25%, rgba(38,0,127,1) 50%, rgba(149,29,37,1) 100%);
        /* background: radial-gradient(ellipse at bottom, #33003e 0%,  #070118 100%); */
        background-size: 150% 150%;

        @media (max-width: 560px) {
            /* font-size: 0.8em; */
        }
    }
`
