import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="logo"></div>

      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Habilidades</li>
        <li>Curriculo</li>
        <li>Contato</li>
      </ul>
    </StyledHeader>
  );
};
