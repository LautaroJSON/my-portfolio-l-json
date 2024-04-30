import styled, { css, keyframes } from "styled-components"
const rotateAnimation = keyframes`
    0% { 
        transform: rotate(0deg) ;
    }
    65% {
        transform: rotate(360deg) scale(0.9);
    }
    90% {
        transform: rotate(365deg);
    }
    95%{
        transform: rotate(358deg) scale(1);
    }
    100%{
        left: 0px;
        top: 0px;
        transform: rotate(360deg);
    }

`
const shakeAnimation = keyframes`
    10%, 90% {
        transform: translateX(-3px);
    }
    20%, 80% {
        transform: translateX(3px);
    }
    30%, 50%, 70% {
        transform: translateX(-2px);
    }
    40%, 60% {
        transform: translateX(2px);
    }
    100% {
        transform: translateX(0);
    }
`
const cursor = keyframes`
    50% {
       border-color: transparent;
    }

`
const typing = keyframes`
from {width: 0}
`

export const CardContainer = styled.div`
  color: white;
`
export const CardStyled = styled.div<{ rotating: boolean; shaking: boolean }>`
  width: 966px;
  height: 805px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  background-color: #2c2c2c6b;
  transition: box-shadow 0.6s ease;
  position: relative;
  box-shadow: 0px 3px 6px 0px rgba(22, 22, 22, 0.3);

  &:hover {
    box-shadow: 0px 3px 6px 4px rgba(121, 45, 149, 0.7);
  }

  ${({ rotating }) =>
    rotating &&
    css`
      animation: ${rotateAnimation} 1s ease forwards;
    `}

  ${({ shaking }) =>
    shaking &&
    css`
      animation: ${shakeAnimation} 0.5s ease;
    `}
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  user-select: none;
  padding-bottom: 12px;
  border-bottom: 1px solid #333;
`
export const CardContent = styled.div`
  display: inline-block;
  /* display: flex; */
  /* flex-direction: row; */
  padding: 16px;
`

export const Text = styled.div`
  margin-top: 6px;
  /* padding-right: 6px; */
  border-right: 8px solid white;
  width: fit-content;
  white-space: nowrap;
  overflow: hidden;
  outline: none;
  animation:
    ${typing} 1.6s,
    ${cursor} 0.6s step-end infinite alternate;
`

export const Span = styled.span<{ colorParam?: string }>`
  color: ${(props) => (props.colorParam ? props.colorParam : "white")};
`

export const Spin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: 20px;
  height: 20px;

  &:hover {
    outline: 2px solid #333;
  }
`
