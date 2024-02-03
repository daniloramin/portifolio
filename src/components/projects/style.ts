import styled from "styled-components";

export const StyledProjects = styled.section`
  min-height: 100vh;
  min-height: 100dvh;

  border: 1px solid blue;
`;

export const StyledProjectBox = styled.div`
  border: 1px solid red;

  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;

  :is(.left, .right) {
    flex: 1;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    .right {
      text-align: start;
    }
  }

  .right {
    text-align: end;
    padding: 2rem;

    h3 {
      font-size: 2.8rem;
      color: var(--primary);
      font-weight: 400;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

export const StyledTechnologyBadge = styled.img`
  width: fit-content;
  margin-inline: 1rem;
`;
