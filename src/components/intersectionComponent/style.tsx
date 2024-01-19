import styled from "styled-components";

export type StyledIntersectionElementProps = {
  $animationSide?: "left" | "top" | "right" | "bottom";
};

export const StyledIntersectionElement = styled.div<StyledIntersectionElementProps>`
  transform: ${(props) =>
    props.$animationSide == "left"
      ? "translateX(-100%)"
      : props.$animationSide == "right"
      ? "translateX(100%)"
      : props.$animationSide == "top"
      ? "translateY(-100%)"
      : props.$animationSide == "bottom"
      ? "translateY(100%)"
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
