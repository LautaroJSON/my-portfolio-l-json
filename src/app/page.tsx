"use client"
import { Card, Header } from "./components"
import { GlobalStyles } from "./styles/globalStyles"
import { CardContainer, Main } from "./styles"
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

  useEffect(() => {
    document.addEventListener("fullscreenchange", HandlerFullscreenChange)
  }, [])

  return (
    <>
      <Head>
        <link rel="preload" href="./styles/globalStyles.tsx" as="style" />
      </Head>

      <GlobalStyles />
      <Main>
        <CardContainer>
          <Card />
        </CardContainer>
        {fullScreenDetected && <Header></Header>}
      </Main>
    </>
  )
}
