import styled from "styled-components";

type StyledBackgroundHighlightProps = {
  $background?: string;
  $color?: string;
};

export const StyledBackgroundHighlight = styled.strong<StyledBackgroundHighlightProps>`
  background-color: ${(props) => props.$background ?? "none"};
  color: ${(props) => props.$color ?? "var(--text)"};
  font-size: inherit;
  font-family: inherit;
  font-weight: 400;
`;
