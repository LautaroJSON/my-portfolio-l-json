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
            <Text $weight="300" $size="1em">
              <Span $colorparam="#BB80B3">MINGW64</Span>
              <Span $colorparam="#9ECE58"> Lautaro@PC </Span>
              <Span $colorparam="#FAED70"> ~</Span>
            </Text>
            <TextContainer>
              <Text
                $weight="500"
                $size="1.6em"
                $margin="36px 0px 16px 0px"
                // $animation={true}
              >
                Hello world, soy Lautaro!
                {/* <Span $colorparam="#FAED70"> Lautaro</Span>! */}
              </Text>

              <Text $weight="300" $size="1.6em">
                Un
                <Span $colorparam="#FAED70"> Desarrollador Full-Stack </Span>
                con
                <Span $colorparam="#9ECE58"> +4 años </Span>de experiencia
                <br />
                residido en
                <Span $colorparam="#89DDFF"> Buenos Aires, Argentina. </Span>
              </Text>
            </TextContainer>
            <br />
            <TextContainer $animationdelay="1.5s">
              <Text $size="1.3em" $weight="500" $margin="10px 0px 0px 0px">
                <Span $colorparam="white" $border="1px solid white">
                  <a
                    href="https://www.linkedin.com/in/lautaro-fernandez-json/"
                    target="_blank"
                  >
                    LinkIn
                  </a>
                </Span>
                <Span $colorparam="white" $border="1px solid white">
                  <a href="https://github.com/LautaroJSON" target="_blank">
                    Github
                  </a>
                </Span>
                <Span $colorparam="white" $border="1px solid white">
                  Mail
                </Span>
                <Span $colorparam="white" $border="1px solid white">
                  CV
                </Span>
              </Text>
            </TextContainer>
            <br />
            {/* <TextContainer>
              <Text $size="1.6em" $margin="36px 0px 16px 0px">
                Sobre mi
              </Text>
              <Text $size="1.3em">
                Actualmente estoy especializado en
                <Span $colorparam="#BB80B3"> Front-End </Span> enfocado en las
                tecnologicas
              </Text>
              <Text $size="1.3em" $margin="6px 0px 0px 6px" $weight="500">
                <Span> NextJS </Span>
                <Span> TypeScrips </Span>
                <Span> Styles-Componentes </Span>
                <Span> html Css </Span>
              </Text>
            </TextContainer> */}
            <TextContainer $animationdelay="2s">
              <Text $size="1.6em" $weight="500" $margin="36px 0px 0px 0px">
                <Span $colorparam="#FAED70">💼 Experiencia laboral</Span>
              </Text>
              <Text $size="1em" $weight="300" $margin="24px 0px 0px 16px">
                <Span $colorparam="#ffffffc8">Actualidad - 2021</Span>
              </Text>
              <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
                <Span $colorparam="#FAED70">Front-End developer - NextJS </Span>
                | Emergencias
              </Text>
              <Text $size="1.3em" $margin="10px 0px 0px 16px">
                Trabajando en diferentes proyectos web apps a gran escala de
                Inició a fin dirigido a sus usuarios (operativos,
                Administrativos, comerciales, médicos) para los diferentes
                negocios de salud digital de la compañía, con la escalabilidad
                bajo el modelo SaaS y metodologia AGILE
              </Text>
              <Text $size="1.3em" $margin="10px 0px 0px 16px" $weight="500">
                NextJS - Typescript - html - Sass - styled-components
              </Text>
              <Text $size="1em" $weight="300" $margin="36px 0px 0px 16px">
                <Span $colorparam="#ffffffc8">2021 - 2020</Span>
              </Text>
              <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
                <Span $colorparam="#FAED70">
                  Front-End developer - Angular{" "}
                </Span>
                | Free lance
              </Text>
              <Text $size="1.3em" $margin="10px 0px 0px 16px">
                Realize una web app para radio local tomando los requisitos del
                cliente, definiendo estilos y estructura de la pagina
              </Text>
              <Text $size="1.3em" $margin="10px 0px 0px 16px" $weight="500">
                Angular - Typescript - html - css
              </Text>
            </TextContainer>
          </CardContent>
        </CardStyled>
      </CardContainer>
    </>
  )
}

export default Card
