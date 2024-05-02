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
} from "./styles"
import Icons from "../icons"

interface Position {
  x: number
  y: number
}

function Card() {
  const timerRef = useRef<any>(null)
  const [fullScreenElement, setFullScreenElement] =
    useState<HTMLHtmlElement | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 })
  const [animations, setAnimations] = useState<{
    rotate: boolean
    shake: boolean
    start: boolean
  }>({ rotate: false, shake: false, start: true })

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
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    })
  }
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isDragging) return
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    })
  }
  const handleMouseUp = () => {
    setIsDragging(false)
  }
  const handleFullScreenToogle = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      fullScreenElement?.requestFullscreen()
    }
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
          $rotating={animations.rotate}
          $shaking={animations.shake}
          $start={animations.start}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
          }}
        >
          <CardHeader
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
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
            <TextContainer>
              <Text $weight="300" $size="1em">
                <Span $colorparam="#BB80B3">MINGW64</Span>
                <Span $colorparam="#9ECE58"> Lautaro@PC </Span>
                <Span $colorparam="#FAED70"> ~</Span>
              </Text>

              <Text
                $weight="500"
                $size="1.6em"
                $margin="16px 0px"
                $animation={true}
              >
                Hello world, soy Lautaro!
                {/* <Span $colorparam="#FAED70"> Lautaro</Span>! */}
              </Text>

              <Text $weight="300" $size="1.6em">
                Un
                <Span $colorparam="#FAED70">
                  {" "}
                  Desarrollador Full-stack SSR{" "}
                </Span>
                con
                <Span $colorparam="#9ECE58"> +4 años </Span>de experiencia
                <br />
                residido en
                <Span $colorparam="#89DDFF"> Buenos Aires, Argentina. </Span>
                Especializado en el
                <Span $colorparam="#BB80B3"> Front-End.</Span>
              </Text>
            </TextContainer>
            <TextContainer></TextContainer>
          </CardContent>
        </CardStyled>
      </CardContainer>
    </>
  )
}

export default Card
