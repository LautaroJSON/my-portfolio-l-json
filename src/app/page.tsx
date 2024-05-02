"use client"
import { Card, Header } from "./components"
import { GlobalStyles } from "./styles/globalStyles"
import { CardContainer, Main } from "./styles"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { useEffect, useState } from "react"
import Head from "next/head"

export default function Home() {
  const [fullScreenDetected, setFullScreenDetected] = useState<boolean>(false)

  const HandlerFullscreenChange = () => {
    if (document.fullscreenElement) {
      setFullScreenDetected(true)
    } else {
      setFullScreenDetected(false)
    }
  }

  // function handleKeydown(event: { keyCode: number }) {
  //   // Verificar si la tecla presionada es F11
  //   if (event.keyCode === 122) {
  //     if (fullScreenDetected) {
  //       setFullScreenDetected(false)
  //     } else {
  //       setFullScreenDetected(true)
  //     }
  //     // Aquí puedes realizar acciones específicas cuando el usuario presiona F11
  //   }
  // }

  useEffect(() => {
    document.addEventListener("fullscreenchange", HandlerFullscreenChange)
    // document.addEventListener("keydown", handleKeydown)
  }, [])

  return (
    <>
      <Head>
        <link rel="preload" href="./styles/globalStyles.tsx" as="style" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main>
          <CardContainer>
            <Card />
          </CardContainer>
          {fullScreenDetected && <Header></Header>}
        </Main>
      </ThemeProvider>
    </>
  )
}
