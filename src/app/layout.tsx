import StyledComponentsRegistry from "./lib/registro"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio de Lautaro - Desarrollador Full-Stack SSR",
  description: "Desarrollador web +4 años de experiencia NextJS",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&family=Ubuntu&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
