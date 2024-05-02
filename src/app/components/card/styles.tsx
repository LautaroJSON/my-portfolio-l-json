import styled, { css, keyframes } from "styled-components"

const rotateAnimation = keyframes`
    0% { 
        transform: rotate(0deg);
    }
    65% {
        transform: rotate(360deg) scale(0.8);
    }
    90% {
        transform: rotate(365deg);
    }
    95%{
        transform: rotate(358deg);
    }
    100%{
        left: 0px;
        top: 0px;
        transform: rotate(360deg) scale(1);
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
const startAnimation = keyframes`
    from{
      transform: translateY(30px);
      opacity: 0.3;
      filter: blur(3px);
    }
    to{
      transform: translateY(0px);
      opacity: 1;
    }
`
const blinkAnimation = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #ffffff; }
`
const typingAnimation = keyframes`
  from { width: 0 }
`
const apperAnimation = keyframes`
  0%{
    border: none;
    opacity: 1;
  } 20%{
    border: 5px solid #333;
  } 
  45%{
    opacity: 0.3;
    border: none;
  }
`

export const CardContainer = styled.div`
  color: white;
`
export const CardStyled = styled.div<{
  $rotating: boolean
  $shaking: boolean
  $start: boolean
}>`
  position: relative;
  width: 977px;
  height: 855px;
  border-radius: 16px;

  padding: 16px;
  box-sizing: border-box;

  backdrop-filter: blur(200px);
  background-color: #2c2c2c6b;

  transition: box-shadow 0.6s ease;
  box-shadow: 0px 3px 6px 0px rgba(22, 22, 22, 0.3);

  &:hover {
    box-shadow: 0px 3px 6px 4px rgba(121, 45, 149, 0.7);
  }

  ${({ $start }) =>
    $start &&
    css`
      animation: ${startAnimation} 1.6s ease;
    `}

  ${({ $rotating }) =>
    $rotating &&
    css`
      animation: ${rotateAnimation} 1s ease forwards;
    `}

  ${({ $shaking }) =>
    $shaking &&
    css`
      animation: ${shakeAnimation} 0.5s ease;
    `}


  @media (max-width: 1200px), (max-height: 920px) {
    width: 80vw;
    max-width: 966px;
    height: 80vw;
    max-height: 805px;
    padding: 8px;
  }

  @media (max-width: 960px) {
    width: 95vw;
    max-width: none;
    height: 97vh;
    max-height: none;
  }
`
export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  user-select: none;
  padding: 4px 4px 11px 4px;
  /* border-bottom: 1px solid #696969; */
`
export const CardContent = styled.div`
  padding: 16px;
`
export const Span = styled.span<{ $colorparam?: string; $border?: string }>`
  color: ${(props) => (props.$colorparam ? props.$colorparam : "white")};
  ${({ $border, $colorparam }) =>
    $border &&
    css`
      border: ${$border};
      padding: 6px;
      cursor: pointer;
      margin: 0px 16px;
      transition: all 0.3s;
      box-shadow: 0px 6px 9px 0px rgba(22, 22, 22, 0.3);

      &:hover {
        border: 3px solid ${$colorparam};
        background-color: #00000055;
        box-shadow: 0px 6px 9px 0px rgba(26, 26, 26, 0.7);
      }
    `}

  font-size: 1em;
`
export const Text = styled.p<{
  $color?: string
  $margin?: string
  $steps?: number
  $size?: string
  $weight?: string
  $animation?: boolean
}>`
  color: ${(props) => (props.$color ? props.$color : "white")};
  font-size: ${(props) => (props.$size ? props.$size : "3em")};
  font-weight: ${(props) => (props.$weight ? props.$weight : 300)};
  margin: ${(props) => (props.$margin ? `${props.$margin}` : "0px 0px")};

  ${({ $animation }) =>
    $animation &&
    css`
      width: 280px;
      overflow: hidden;
      white-space: nowrap;
      padding-right: 10px;
      border-right: 0.15em solid white;
      animation:
        ${typingAnimation} 3.5s,
        ${blinkAnimation} 0.75s forwards;
    `}
`
export const TextContainer = styled.div`
  animation: ${startAnimation} 1.6s ease forwards;
  animation-delay: 1.3s;
  opacity: 0;
  /* display: none; */
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    outline: 2px solid #dadada;
  }
`
export const IconContainer = styled.div`
  display: flex;
  gap: 16px;
`
