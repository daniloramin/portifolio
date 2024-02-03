import styled from "styled-components";

export const StyledHeader = styled.header`
  --mobile-sidebar-right-padding: 3rem;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100vw;
  width: 100dvw;

  &.scrolled {
    -webkit-backdrop-filter: blur(4px);
    backdrop-filter: blur(4px);
    background-image: linear-gradient(to right, rgba(39, 199, 233, 0.6), rgba(127, 122, 241, 0.6));
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
  }

  nav {
    padding: 2rem 0;

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

  button {
    display: none;
  }

  @media (max-width: 900px) {
    nav {
      --height: 60rem;
      translate: 100%;

      position: absolute;
      right: 0;
      top: 0;
      max-width: 300px;
      width: 100%;
      background-color: var(--primary);
      box-shadow: -4px 4px 10px 0 rgba(0, 0, 0, 0.4);
      height: 20px;
      overflow: hidden;

      &[data-open="true"] {
        translate: 0%;
        transition: translate 0.3s, height 0.3s 0.3s;
        height: var(--height);

        & + button span {
          rotate: 45deg;
          transition: 0.4s;

          &::before {
            rotate: 90deg;
            transform: translateX(25%);
          }

          &::after {
            scale: 0;
          }
        }
      }

      menu {
        flex-direction: column;
        align-items: flex-end;
        gap: 4rem;
        padding: 6rem var(--mobile-sidebar-right-padding);

        a {
          font-size: 3.6rem;
        }
      }
    }

    button {
      display: block;
      position: absolute;
      z-index: 2;
      right: var(--mobile-sidebar-right-padding);
      top: 2rem;
      width: 3rem;
      aspect-ratio: 1;
      background-color: transparent;
      border: none;
      cursor: pointer;

      span {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 0.3rem;
        background-color: var(--text);

        &::before,
        &::after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          height: inherit;
          background-color: inherit;
          transition: 0.4s;
        }

        &::before {
          top: -6px;
        }

        &::after {
          bottom: -6px;
        }
      }
    }
  }
`;
