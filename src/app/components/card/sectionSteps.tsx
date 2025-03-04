import { TextContainer, Text, Span } from "./styles"

const config = {
  animationDeplay: 1.4,
}

export const jsxStep = {
  work: (
    <TextContainer $animationdelay={`${config.animationDeplay}s`}>
      <Text $size="1.6em" $weight="500" $margin="36px 0px 0px 0px">
        <Span $colorparam="#FAED70">💼 Experiencia laboral</Span>
      </Text>
      <Text $size="1em" $weight="300" $margin="24px 0px 0px 16px">
        <Span $colorparam="#ffffffc8">Actualidad - 2025</Span>
      </Text>
      <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
        <Span $colorparam="#FAED70">Front-End Arquitecture Developer - NX React Ts </Span>|
        Ovidio - La Nacion
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Dentro del chapter de 
        <Span $colorparam="#FAED70"> Arquitectura Front-End</Span> cross a todos los chaptes, ayudando y definiendo extructuras de proyectos. 
      </Text>

      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Trabajando principalmente en el desarrollo de un template <Span $colorparam="#FAED70">Monorepo</Span> para front end, con <Span $colorparam="#FAED70">Nx</Span> incluyendo la base de un <Span $colorparam="#FAED70">Design System</Span>, con Storybook 8.0
        interiorizandome en el equipo de UX/UI y herramientas como figma
       
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px" $weight="500">
        React - Typescript - Taildwind - Storybook - Nx
      </Text>
      <Text $size="1em" $margin="8px 0px 0px 16px" $weight="400">
        <Span $colorparam="#ffffffc8">
          Extras: Azure - Teams - Slack - Figma - Desyng Sistem
        </Span>
      </Text>
      <br />
      <hr />
      <Text $size="1em" $weight="300" $margin="24px 0px 0px 16px">
        <Span $colorparam="#ffffffc8">2024 - 2021</Span>
      </Text>
      <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
        <Span $colorparam="#FAED70">Front-End developer - NextJS </Span>|
        Emergencias
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Trabajando en diferentes{" "}
        <Span $colorparam="#FAED70">Desarrollos de Web App</Span> a gran escala
        de inicio a fin de dirigir a los usuarios de la empresa (operativos,
        administrativos, comerciales, médicos) para sus negocios de salud
        digital.
      </Text>

      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Mi tarea incluye corrección de <Span $colorparam="#FAED70">PRs</Span>,
        participación activa en
        <Span $colorparam="#FAED70"> Reglas de Negocio</Span> sugiriendo posibles
        <Span $colorparam="#FAED70"> Soluciones Tecnológicas </Span> y
        llevándolas a cabo con la célula de front. Sugerencias y feedback
        <Span $colorparam="#FAED70"> UX/UI</Span> y ayudando al equipo en
        conocimientos técnicos.
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
    <TextContainer $animationdelay={`${config.animationDeplay}s`}>
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
