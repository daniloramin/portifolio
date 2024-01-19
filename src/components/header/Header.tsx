import { useEffect, useRef, useState } from "react";
import { StyledHeader } from "./style";

export const Header = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    window.onscroll = () => {
      if (ref.current) ref.current.classList.toggle("scrolled", window.scrollY > 0);
    };
  }, []);

  return (
    <StyledHeader ref={ref}>
      <nav className="width" data-open={isShow}>
        <menu>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
          <li>
            <a href="#experiences">Curriculo</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </menu>
      </nav>

      <button id="sidebar-toggler" tabIndex={0} onClick={() => setIsShow((state) => !state)}>
        <span></span>
      </button>
    </StyledHeader>
  );
};
