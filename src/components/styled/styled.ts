import styled from "styled-components";

type StyledBackgroundHighlightProps = {
  $background?: string;
};

export const StyledBackgroundHighlight = styled.span<StyledBackgroundHighlightProps>`
  background-color: ${(props) => props.$background ?? "var(--primary)"};
  color: white;
  font-size: inherit;
  font-family: inherit;
`;
