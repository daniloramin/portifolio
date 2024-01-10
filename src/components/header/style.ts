import styled from "styled-components";

export const StyledHeader = styled.header<{ $isShow: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;

  nav {
    padding: 2rem 0;

    @media (max-width: 900px) {
      display: ${(props) => (props.$isShow ? "block" : "none")};
    }

    menu {
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;

      a {
        position: relative;
        font-size: 2.4rem;
        font-family: "Quicksand", sans-serif;
        font-weight: 500;
        color: var(--text);
        text-decoration: none;
        transition: 0.3s;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background-color: var(--accent);
          border-radius: 4rem;
          transition: scale 0.3s;
          scale: 0 1;
          transform-origin: right;
        }

        &:hover {
          color: var(--accent);

          &::before {
            scale: 1 1;
            transform-origin: left;
          }
        }
      }
    }
  }
`;
