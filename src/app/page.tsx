"use client"
import { Card, Header } from "./components"
import { GlobalStyles } from "./styles/globalStyles"
import { CardContainer, Main } from "./styles"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main>
          {/* <Header></Header> */}
          <CardContainer>
            <Card />
          </CardContainer>
        </Main>
      </ThemeProvider>
    </>
  )
}
