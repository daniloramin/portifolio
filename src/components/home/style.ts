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
        font-weight: 400;
      }
    }

    .right {
      position: relative;
      z-index: 1;
      border-radius: 10px;
      perspective: 100vw;

      img {
        max-width: 400px;
        border-radius: 50%;
        box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.2);
        animation: flip 1s ease-out;
        backface-visibility: hidden;
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

  a.more {
    animation: down 4s linear infinite;

    padding: 5px;
    color: var(--background);

    background-color: transparent;
    border: 2px solid transparent;

    svg {
      font-size: 36px;
    }
  }

  @keyframes down {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
  }

  @keyframes flip {
    from {
      transform: rotateY(-180deg);
      filter: blur(10px);
    } to {
      transform: rotateY(0deg);
      filter: blur(0px);
    }
  }
`;
