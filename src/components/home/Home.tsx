import { StyledHome } from "./style";
import { StyledBackgroundHighlight } from "../styled/styled";

import { Header } from "@components/header";

export const Home = () => {
  return (
    <StyledHome>
      <Header />

      <div className="container width">
        <div className="left">
          <h1>
            Olá, sou o
            <br />
            <StyledBackgroundHighlight>Danilo Ramin</StyledBackgroundHighlight>,
            <br />
            Desenvolvedor Web Full Stack
          </h1>
        </div>

        <div className="right">
          <img src="https://placehold.co/300x450" alt="Imagem de Danilo Ramin" />
        </div>
      </div>
    </StyledHome>
  );
};
