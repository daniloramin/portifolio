import styled from "styled-components";

export const StyledHome = styled.section`
  height: 100vh;
  height: 100dvh;

  background-color: var(--primary);
  background-image: linear-gradient(to right, var(--primary), var(--secondary));

  display: grid;
  place-items: center;

  div.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
    gap: 30px;

    .left {
      h1 {
        font-size: 48px;
      }
    }

    .right {
      position: relative;
      z-index: 1;
      border-radius: 10px;

      img {
        max-width: 300px;
        aspect-ratio: 1/1.5;
        border-radius: inherit;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
      }
    }

    @media (max-width: 750px) {
      & {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }

    @media (max-width: 500px) {
      .left {
        h1 {
          font-size: 30px;
        }
      }
    }
  }
`;
