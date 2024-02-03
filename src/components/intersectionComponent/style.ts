import styled from "styled-components";

export type StyledIntersectionSlideProps = {
  $animationSide?: "left" | "top" | "right" | "bottom";
};

export const StyledIntersectionSlide = styled.div<StyledIntersectionSlideProps>`
  transform: ${(props) =>
    props.$animationSide == "left"
      ? "translateX(-20%)"
      : props.$animationSide == "right"
      ? "translateX(20%)"
      : props.$animationSide == "top"
      ? "translateY(-20%)"
      : props.$animationSide == "bottom"
      ? "translateY(20%)"
      : ""};
  filter: blur(5px);
  opacity: 0;
  transition: 0.7s ease-out;

  &.show {
    transform: translateX(0);
    filter: blur(0);
    opacity: 1;
  }
`;

export type StyledIntersectionRevealProps = {
  $animationSide?: "left" | "top" | "right" | "bottom";
  $color?: "primary" | "secondary" | "accent";
};

export const StyledIntersectionReveal = styled.div<StyledIntersectionRevealProps>`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    clip-path: inset(0 0 0 0);
    background-color: ${(props) =>
      props.$color == "secondary"
        ? "var(--secondary)"
        : props.$color == "accent"
        ? "var(--accent)"
        : "var(--primary)"};
    transition: 1s;
  }

  &.show::after {
    clip-path: ${(props) =>
      props.$animationSide == "top"
        ? "inset(100% 0 0 0)"
        : props.$animationSide == "right"
        ? "inset(0 100% 0 0)"
        : props.$animationSide == "bottom"
        ? "inset(0 0 100% 0)"
        : "inset(0 0 0 100%)"};
  }
`;
