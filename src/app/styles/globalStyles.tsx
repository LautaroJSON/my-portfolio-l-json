import { createGlobalStyle, keyframes } from "styled-components"

const bgAnimation = keyframes`
    from{background-position: 0% 0%; }
    to{background-position: 100% 100%;}
`
export const GlobalStyles = createGlobalStyle`

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}


::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}


::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #bb80b3, #6d28d9);
  border-radius: 10px;
  border: 2px solid rgba(20, 20, 40, 0.6);
  transition: background 0.3s ease;
}


::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #faed70, #bb80b3);
}


::-webkit-scrollbar-corner {
  background: transparent;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #bb80b3 rgba(255, 255, 255, 0.05);
}

        
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
