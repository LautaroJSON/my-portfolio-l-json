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

      {/* Rol Actual */}
      <Text $size="1em" $weight="300" $margin="24px 0px 0px 16px">
        <Span $colorparam="#ffffffc8">Actualidad - 2025</Span>
      </Text>
      <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
        <Span $colorparam="#FAED70">
          Front-End Architecture Developer - NX React TS
        </Span>{" "}
        | Ovidio - La Nación
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Colaboro en el{" "}
        <Span $colorparam="#FAED70">chapter de Arquitectura Front-End</Span> de
        manera cross-team, definiendo la estructura de proyectos y estándares de
        desarrollo para todo el equipo.
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Lidero el desarrollo de un template{" "}
        <Span $colorparam="#FAED70">Monorepo</Span> con{" "}
        <Span $colorparam="#FAED70">Nx</Span> y un{" "}
        <Span $colorparam="#FAED70">Design System</Span> completo, utilizando{" "}
        <Span $colorparam="#FAED70">Storybook 8.0</Span>. Colaboro estrechamente
        con el equipo de UX/UI y herramientas como Figma para mejorar la
        experiencia del usuario y la eficiencia del desarrollo.
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px" $weight="500">
        React - TypeScript - Tailwind - Storybook - Nx
      </Text>
      <Text $size="1em" $margin="8px 0px 0px 16px" $weight="400">
        <Span $colorparam="#ffffffc8">
          Herramientas: Azure - Teams - Slack - Figma - Design System
        </Span>
      </Text>

      <br />
      <hr />

      {/* Rol Anterior */}
      <Text $size="1em" $weight="300" $margin="24px 0px 0px 16px">
        <Span $colorparam="#ffffffc8">2021 - 2024</Span>
      </Text>
      <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
        <Span $colorparam="#FAED70">Front-End Developer - NextJS</Span> |
        Emergencias
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Desarrolle
        <Span $colorparam="#FAED70"> Web Apps a gran escala</Span> desde la
        concepción hasta el despliegue, orientadas a usuarios operativos,
        administrativos, comerciales y médicos en el sector de salud digital.
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Mis responsabilidades incluyen revisión y corrección de{" "}
        <Span $colorparam="#FAED70">PRs</Span>, participación activa en{" "}
        <Span $colorparam="#FAED70">Reglas de Negocio</Span>, diseño e
        implementación de{" "}
        <Span $colorparam="#FAED70">Soluciones Tecnológicas</Span>, así como
        brindar feedback en <Span $colorparam="#FAED70">UX/UI</Span> y mentoría
        técnica al equipo de front-end. Logré mejorar la eficiencia del flujo de
        desarrollo y reducir errores en producción.
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px" $weight="500">
        NextJS - TypeScript - HTML - Sass - Styled-components
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
        <Span $colorparam="#BB80B3">👨‍🏫 Formación</Span>
      </Text>
      <Text $size="1em" $weight="300" $margin="24px 0px 0px 16px">
        <Span $colorparam="#ffffffc8">2018 - 2020</Span>
      </Text>
      <Text $size="1.3em" $weight="600" $margin="10px 0px 0px 16px">
        <Span $colorparam="#BB80B3">UTN FRA</Span> | Técnico Superior en
        Programación
      </Text>
      <Text $size="1.3em" $margin="10px 0px 0px 16px">
        Inicié con ABMs en <Span $colorparam="#BB80B3">C</Span> y{" "}
        <Span $colorparam="#BB80B3">C#</Span>, conectando con bases de datos{" "}
        <Span $colorparam="#BB80B3">MySQL</Span>. En el front-end trabajé con
        HTML, CSS y JS, agregando Angular/TypeScript y{" "}
        <Span $colorparam="#BB80B3">Ionic</Span> para apps móviles con
        despliegue en Firebase. Por el lado del back-end, implementé APIs REST
        con PHP.
      </Text>
      <Text $size="1.3em" $margin="24px 0px 0px 16px" $weight="500">
        C - C# - HTML - CSS - TypeScript - MySQL - PHP - Angular - Ionic -
        Firebase
      </Text>
      <Text $size="1em" $margin="8px 0px 0px 16px" $weight="400">
        <Span $colorparam="#ffffffc8">
          Git - Bash/Linux - Programación Orientada a Objetos - Arquitectura
          REST API - PWA
        </Span>
      </Text>
    </TextContainer>
  ),

  proyects: (
    <TextContainer $animationdelay={`${config.animationDeplay}s`}>
      <Text $size="1.6em" $weight="500" $margin="36px 0px 0px 0px">
        <Span $colorparam="#9ECE58">🚀 Proyectos</Span>
      </Text>
    </TextContainer>
  ),
}

export type StepsTypes = keyof typeof jsxStep

export const ArrayStep: Array<StepsTypes> = ["work", "formation", "proyects"]
