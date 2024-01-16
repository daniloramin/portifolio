import styled from "styled-components";

export const StyledAbout = styled.section`
  border: 2px solid red;
  min-height: 100vh;
  min-height: 100dvh;

  h2 {
    font-size: 48px;
    margin-top: 80px;
    margin-bottom: 40px;
    color: var(--secondary);
  }

  p {
    font-size: 24px;
    margin-bottom: 40px;
  }

  @media (max-width: 650px) {
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }
`;
