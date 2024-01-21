import styled from "styled-components";

export const StyledAbout = styled.section`
  min-height: 100vh;
  min-height: 100dvh;
`;

type StyledInfoBoxProps = {
  $secondary?: boolean;
};

export const StyledInfoBox = styled.div<StyledInfoBoxProps>`
  position: relative;
  padding: 3rem;
  margin-bottom: 5rem;
  max-width: 750px;
  background-color: white;
  border: 1px solid ${(props) => (props.$secondary ? "var(--secondary)" : "var(--primary)")};
  color: var(--text);

  /*
  box-shadow: ${(props) =>
    props.$secondary ? "10px 10px 0px 0 var(--secondary)" : "-10px 10px 0px 0 var(--primary)"};
    */

    
    &::before {
      content: '';
      position: absolute;
      border: 1px solid ${props => props.$secondary ? "var(--secondary)" : "var(--primary)"};
      inset: ${props => props.$secondary ? "10px -10px -10px 10px" : "10px 10px -10px -10px"};
      z-index: -1;
    }

  margin-left: ${(props) => props.$secondary && "auto"};
  text-align: ${(props) => props.$secondary && "end"};

  h3 {
    font-size: 3rem;
    margin-bottom: 2rem;
    font-weight: 500;
    color: ${(props) => (props.$secondary ? "var(--secondary)" : "var(--primary)")};
  }

  p {
    font-size: 2.4rem;
    font-weight: 300;
  }

  @media (max-width: 750px) {
    h3 {
      text-align: center;
    }

    & {
      text-align: start;
    }
  }
`;
