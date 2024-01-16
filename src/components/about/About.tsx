import { StyledAbout } from "./style";
import { StyledBackgroundHighlight } from "../styled/styled";

export const About = () => {
  return (
    <StyledAbout id="about">
      <div className="wrapper width">
        <h2>Um pouco sobre mim ;)</h2>

        <p>
          Amo resolver problemas, tanto na vida profissional quanto no meu cotidiano, me fazendo
          ficar feliz resolvendo algo simples, porém que irá ajudar alguém.
        </p>

        <p>
          Sou <StyledBackgroundHighlight>Desenvolvedor Web Full Stack</StyledBackgroundHighlight> e
          estou no mercado de trabalho a quase 2 anos.Sou também graduado em{" "}
          <StyledBackgroundHighlight>Ciência da Computação.</StyledBackgroundHighlight>
        </p>

        <p>
          Nesse período, resolvi problemas, criei sites, aplicações e gerei resultados para empresas
          onde trabalhei e seus respectivos clientes, desenvolvendo desde sites landing pages e
          sites institucionais, até aplicações de ensino com vários usuários diários, onde resolvi
          problemas tanto no <StyledBackgroundHighlight>Front-End</StyledBackgroundHighlight> quanto
          no <StyledBackgroundHighlight>Back-End.</StyledBackgroundHighlight>
        </p>

        <p>
          Eu fui o encarregado pela criação do frontend da maior parte dessas aplicações, onde
          sempre busquei entregar o resultado que o cliente queria, seguindo também a acessibilidade
          e responsividade das aplicações. Porém, também resolvi problemas no backend, onde consumi
          grandes quantidades de dados e criei novas funcionalidades.
        </p>

        <p>
          Além disso, continuo sempre{" "}
          <StyledBackgroundHighlight>aprendendo</StyledBackgroundHighlight> e me{" "}
          <StyledBackgroundHighlight>aprimorando</StyledBackgroundHighlight>, tentando me manter
          sempre atualizado das tecnologias e conceitos mais modernos no Desenvolvimento Web.
        </p>
      </div>
    </StyledAbout>
  );
};
