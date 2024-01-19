import { StyledSectionTitle, StyledSectionTitleProps } from "./style";

type SectionTitleProps = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children, $color }: SectionTitleProps & StyledSectionTitleProps) => {
  return (
    <StyledSectionTitle $color={$color}>
      <span>{children}</span>
    </StyledSectionTitle>
  );
};
