"use client"
import React, { useEffect, useRef, useState } from "react"
import { CardContainer, CardHeader, CardStyled, Spin } from "./styles"

interface Position {
  x: number
  y: number
}

function Card() {
  const timerRef = useRef<any>(null)
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [offset, setOffset] = useState<Position>({ x: 0, y: 0 })

  const [animations, setAnimations] = useState<{
    rotate: boolean
    shake: boolean
  }>({ rotate: false, shake: false })

  const handleClickAnimation = (type: "rotate" | "shake") => {
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

  return (
    <>
      <CardContainer>
        <CardStyled
          rotating={animations.rotate}
          shaking={animations.shake}
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
            <Spin
              onClick={() => {
                handleClickAnimation("rotate")
                setTimeout(() => {
                  setPosition({ x: 0, y: 0 })
                }, 1000)
              }}
            >
              ↺
            </Spin>
            <span>💻PORTFOLIO:/c/Users/Lautaro</span>
            <Spin onClick={() => handleClickAnimation("shake")}>✖</Spin>
          </CardHeader>
        </CardStyled>
      </CardContainer>
    </>
  )
}

export default Card
