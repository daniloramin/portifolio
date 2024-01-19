import { StyledHome } from "./style";
import { StyledBackgroundHighlight } from "../styled/styled";

import { Header } from "@components/header";

import { BsChevronDoubleDown } from "react-icons/bs";
import picture from "@/assets/picture.jfif";

export const Home = () => {
  return (
    <StyledHome id="home">
      <Header />

      <div className="container width">
        <div className="left">
          <h1>
            Olá, sou o
            <br />
            <StyledBackgroundHighlight $background="var(--accent)" $color="white">
              Danilo Ramin
            </StyledBackgroundHighlight>
            ,
            <br />
            Desenvolvedor Web Full Stack
          </h1>
        </div>

        <div className="right">
          <img src={picture} alt="Imagem de Danilo Ramin" />
        </div>
      </div>

      <a href="#about" className="more">
        <BsChevronDoubleDown />
      </a>
    </StyledHome>
  );
};
