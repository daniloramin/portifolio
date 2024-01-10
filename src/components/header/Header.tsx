import { useState } from "react";
import { StyledHeader } from "./style";

export const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <StyledHeader $isShow={isShow}>
      <nav className="width">
        <menu>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Sobre</a>
          </li>
          <li>
            <a href="">Projetos</a>
          </li>
          <li>
            <a href="">Habilidades</a>
          </li>
          <li>
            <a href="">Curriculo</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </menu>
      </nav>

      <button id="sidebar-toggler" tabIndex={0} onClick={() => setIsShow((state) => !state)}>
        <span>click</span>
      </button>
    </StyledHeader>
  );
};