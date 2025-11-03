"use client"
import React, { useEffect, useRef, useState } from "react"
import {
  CardContainer,
  CardContent,
  CardHeader,
  CardStyled,
  Span,
  Icon,
  Text,
  IconContainer,
  TextContainer,
  Button,
  CardFooter,
  InfoContainerStep,
} from "./styles"
import Icons from "../icons"
import { ArrayStep, jsxStep } from "./sectionSteps"
import Link from "next/link"

function Card() {
  const timerRef = useRef<any>(null)
  const [fullScreenElement, setFullScreenElement] =
    useState<HTMLHtmlElement | null>(null)

  const [animations, setAnimations] = useState<{
    rotate: boolean
    shake: boolean
    start: boolean
    apper: boolean
  }>({ rotate: false, shake: false, start: true, apper: false })

  const [step, setStep] = useState<number>(0)

  const handleClickAnimation = (type: "rotate" | "shake" | "start") => {
    setAnimations({ ...animations, [type]: !animations[type] })

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    const timeout = setTimeout(
      () => {
        setAnimations({ ...animations, [type]: false })
      },
      type === "rotate" ? 1000 : 300,
    )

    timerRef.current = timeout
  }

  // Estado de posición
  const offset = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const [position, setPosition] = useState({ x: 50, y: 0 })

  // Drag control

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    }
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return
    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    })
  }

  const handleMouseUp = () => {
    isDragging.current = false
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }

  // Fullscreen control
  const handleFullScreenToogle = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      fullScreenElement?.requestFullscreen()
    }
  }

  const handleNextStep = (move: "next" | "back") => {
    if (move === "next") {
      if (step + 1 <= ArrayStep.length) {
        setStep((prev) => prev + 1)
        setAnimations({ ...animations, apper: true })
        setTimeout(() => {
          setAnimations({ ...animations, apper: false })
        }, 1000)
      }
    } else {
      if (step - 1 >= 0) {
        setStep((prev) => prev - 1)
        setAnimations({ ...animations, apper: true })
        setTimeout(() => {
          setAnimations({ ...animations, apper: false })
        }, 1000)
      }
    }
  }

  const renderStep = () => {
    const stapName = ArrayStep[step]
    return jsxStep[stapName]
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      setFullScreenElement(document.querySelector("html"))
    }
    setTimeout(() => {
      handleClickAnimation("start")
    }, 1600)
  }, [])

  return (
    <>
      <CardContainer>
        <CardStyled
          onMouseDown={handleMouseDown}
          $rotating={animations.rotate}
          $shaking={animations.shake}
          $start={animations.start}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <CardHeader
            style={{
              cursor: isDragging ? "grabbing" : "grab",
            }}
          >
            <Icon
              onClick={() => {
                handleClickAnimation("rotate")
                setTimeout(() => {
                  setPosition({ x: 0, y: 0 })
                }, 1000)
              }}
            >
              <Icons name="haburgerIcon"></Icons>
            </Icon>
            <span>
              <Span $colorparam="#BB80B3">PORTFOLIO: </Span>
              /c/Developers/tops/Lautaro
            </span>
            <IconContainer>
              <Icon
                onClick={() => {
                  handleClickAnimation("rotate")
                  setTimeout(() => {
                    setPosition({ x: 0, y: 0 })
                  }, 1000)
                }}
              >
                <Icons name="spinIcon"></Icons>
              </Icon>
              <Icon onClick={() => handleFullScreenToogle()}>
                <Icons name="expandIcon"></Icons>
              </Icon>
              <Icon onClick={() => handleClickAnimation("shake")}>
                <Icons name="closeIcon"></Icons>
              </Icon>
            </IconContainer>
          </CardHeader>

          <CardContent>
            <Text $weight="300" $size="1em">
              <Span $colorparam="#BB80B3">MINGW64</Span>
              <Span $colorparam="#9ECE58"> Lautaro@PC </Span>
              <Span $colorparam="#FAED70"> ~</Span>
            </Text>
            <TextContainer>
              <Text $weight="500" $size="1.6em" $margin="36px 0px 16px 0px">
                ¡Hola! Soy Lautaro
              </Text>

              <Text $weight="300" $size="1.6em">
                <Span $colorparam="#FAED70"> Desarrollador Full-Stack </Span>
                con <Span $colorparam="#BB80B3">+4 años de experiencia </Span>
                creando aplicaciones web escalables y optimizadas residiendo en{" "}
                <Span $colorparam="#89DDFF">Buenos Aires, Argentina</Span>.
              </Text>
            </TextContainer>
            <br />
            <TextContainer $animationdelay="0.8s">
              <Text $size="1.3em" $weight="500" $margin="10px 0px 0px 0px">
                <Span $colorparam="white" $border="1px solid white">
                  <Link
                    href="https://www.linkedin.com/in/lautaro-fernandez-json/"
                    target="_blank"
                  >
                    LinkedIn
                  </Link>
                </Span>
                <Span $colorparam="white" $border="1px solid white">
                  <Link href="https://github.com/LautaroJSON" target="_blank">
                    GitHub
                  </Link>
                </Span>

                <Span $colorparam="white" $border="1px solid white">
                  <a
                    href="files/CV_LAUTARO_FERNANDEZ_2025_MEJORADO.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Curriculum
                  </a>
                </Span>
              </Text>
            </TextContainer>
            <br />
            <InfoContainerStep $triggerAnimation={animations.apper}>
              {renderStep()}
            </InfoContainerStep>
          </CardContent>

          <CardFooter>
            <Button
              onClick={() => handleNextStep("back")}
              className={step === 0 ? "hidden" : ""}
            >
              <Text $size="1.8em">Anterior</Text>
            </Button>
            <Button
              onClick={() => handleNextStep("next")}
              className={step + 1 >= ArrayStep.length ? "hidden" : ""}
            >
              <Text $size="1.8em">Siguiente</Text>
            </Button>
          </CardFooter>
        </CardStyled>
      </CardContainer>
    </>
  )
}

export default Card
