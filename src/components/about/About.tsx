import { StyledAbout, StyledInfoBox } from "./style";

import { StyledBackgroundHighlight } from "@components/styled/styled";
import { SectionTitle } from "@components/sectionTitle";

import { IntersectionComponent } from "@components/intersectionComponent/";

export const About = () => {
  return (
    <StyledAbout id="about">
      <div className="wrapper width">
        <SectionTitle $color="secondary">Sobre mim</SectionTitle>

        {/* <IntersectionComponent $animationSide="left">
          <StyledInfoBox>
            <h3>Gosto de ser útil</h3>
            <p>
              Amo resolver problemas, tanto na vida profissional quanto no meu cotidiano, me fazendo
              ficar feliz resolvendo algo simples, principalmente se ajudar alguém.
            </p>
          </StyledInfoBox>
        </IntersectionComponent> */}

        <IntersectionComponent type="slide" $animationSide="left">
          <StyledInfoBox>
            <h3>Formação e carreira</h3>
            <p>
              Sou{" "}
              <StyledBackgroundHighlight>Desenvolvedor Web Full Stack</StyledBackgroundHighlight> e
              estou no mercado de trabalho a quase 2 anos.Sou também, graduado em{" "}
              <StyledBackgroundHighlight>Ciência da Computação.</StyledBackgroundHighlight>
            </p>
          </StyledInfoBox>
        </IntersectionComponent>

        <IntersectionComponent type="slide" $animationSide="right">
          <StyledInfoBox $secondary>
            <h3>Resultados</h3>
            <p>
              Nesse período, resolvi problemas, criei sites, aplicações e gerei resultados para
              empresas onde trabalhei e seus respectivos clientes, desenvolvendo desde sites landing
              pages e sites institucionais, até aplicações de ensino com vários usuários diários,
              onde resolvi problemas tanto no{" "}
              <StyledBackgroundHighlight>Front-End</StyledBackgroundHighlight> quanto no{" "}
              <StyledBackgroundHighlight>Back-End.</StyledBackgroundHighlight>
            </p>
          </StyledInfoBox>
        </IntersectionComponent>

        <IntersectionComponent type="slide" $animationSide="left">
          <StyledInfoBox>
            <h3>Responsabilidades</h3>
            <p>
              Eu fui o encarregado pela criação do frontend da maior parte dessas aplicações, onde
              sempre busquei entregar o resultado que o cliente queria, seguindo também a
              acessibilidade e responsividade das aplicações. Porém, também resolvi problemas no
              backend, onde consumi grandes quantidades de dados e criei novas funcionalidades.
            </p>
          </StyledInfoBox>
        </IntersectionComponent>

        <IntersectionComponent type="slide" $animationSide="right">
          <StyledInfoBox $secondary>
            <h3>Evolução e aprendizado</h3>
            <p>
              Além disso, continuo sempre{" "}
              <StyledBackgroundHighlight>aprendendo</StyledBackgroundHighlight> e me{" "}
              <StyledBackgroundHighlight>aprimorando</StyledBackgroundHighlight>, tentando me manter
              sempre atualizado das tecnologias e conceitos mais modernos no Desenvolvimento Web.
            </p>
          </StyledInfoBox>
        </IntersectionComponent>
      </div>
    </StyledAbout>
  );
};
