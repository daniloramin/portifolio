import styled from "styled-components";

export type StyledSectionTitleProps = {
  $color?: "primary" | "secondary" | "accent";
};
export const StyledSectionTitle = styled.h2<StyledSectionTitleProps>`
  position: relative;
  margin-top: 8rem;
  margin-bottom: 6rem;
  color: ${(props) =>
    props.$color == "primary"
      ? "var(--primary)"
      : props.$color == "secondary"
      ? "var(--secondary)"
      : props.$color == "accent"
      ? "var(--accent)"
      : "var(--text)"};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    background-color: currentColor;
    z-index: -1;
  }

  span {
    display: block;
    width: fit-content;
    font-family: inherit;
    font-size: 4.8rem;
    font-weight: 400;

    background-color: var(--background);
    padding-inline: 2rem;
    margin-inline: auto;
  }
`;
