import { TextContainer, Text, Span } from "./styles"

export const jsxStep = {
  work: (
    <TextContainer $animationdelay="2s">
      <Text $size="1.6em" $weight="500" $margin="36px 0px 0px 0px">
        <Span $colorparam="#FAED70">💼 Experiencia laboral</Span>
      </Text>
      <Text $size="1em" $weight="300" $margin="24px 0px 0px 16px">
        <Span $colorparam="#ffffffc8">Actualidad - 2021</Span>
      </Text>
      <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
        <Span $colorparam="#FAED70">Front-End developer - NextJS </Span>|
        Emergencias
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Trabajando en diferentes proyectos web apps a gran escala de Inició a
        fin dirigido a sus usuarios (operativos, Administrativos, comerciales,
        médicos) para los diferentes negocios de salud digital de la compañía,
        con la escalabilidad bajo el modelo SaaS y metodologia AGILE
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px" $weight="500">
        NextJS - Typescript - html - Sass - styled-components
      </Text>
      <Text $size="1em" $margin="8px 0px 0px 16px" $weight="400">
        <Span $colorparam="#ffffffc8">
          Extras: GitFlow - AGILE - Azure - Teams - Jira
        </Span>
      </Text>
    </TextContainer>
  ),
  formation: (
    <TextContainer $animationdelay="2.3s">
      <Text $size="1.6em" $weight="500" $margin="36px 0px 0px 0px">
        <Span $colorparam="#BB80B3">👨‍🏫 Formacion</Span>
      </Text>
      <Text $size="1em" $weight="300" $margin="24px 0px 0px 16px">
        <Span $colorparam="#ffffffc8">2018 - 2020</Span>
      </Text>
      <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
        <Span $colorparam="#BB80B3">UTN FRA </Span>| Tecnico Superior en
        Programacion
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Comenzando con ABMs en <Span $colorparam="#BB80B3"> C</Span>, luego en
        <Span $colorparam="#BB80B3"> C# </Span>
        conectando con bases de datos locales{" "}
        <Span $colorparam="#BB80B3"> MySQL</Span>, Por el lado{" "}
        <Span $colorparam="#BB80B3"> Front-End </Span> HTML CSS y JS, para luego
        agregar Angular/Typecrips. Ionic para
        <Span $colorparam="#BB80B3"> App Moviles </Span> con deploy en firebase.
        Php y estructura API REST por el lado
        <Span $colorparam="#BB80B3"> Back-End.</Span>
      </Text>
      <Text $size="1.3em" $margin="24px 0px 0px 16px" $weight="500">
        C - C# - HTML CSS - Typescrips - Bases de datos (MySql) - Php - Angular
        - Ionic - firebase
      </Text>
      <Text $size="1em" $margin="8px 0px 0px 16px" $weight="400">
        <Span $colorparam="#ffffffc8">
          Git - Bash Linux - Programacion Orientada a Obejetos - Arquitectura
          REST API - PWA
        </Span>
      </Text>
    </TextContainer>
  ),
}

export type StepsTypes = keyof typeof jsxStep

export const ArrayStep: Array<StepsTypes> = ["work", "formation"]
