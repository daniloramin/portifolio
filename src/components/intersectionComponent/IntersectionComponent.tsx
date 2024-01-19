import { useEffect, useRef } from "react";
import { StyledIntersectionElement } from "./style";
import { StyledIntersectionElementProps } from "./style";

type IntersectionComponentProps = {
  children: React.ReactNode;
};

export const IntersectionComponent = ({
  children,
  $animationSide,
}: IntersectionComponentProps & StyledIntersectionElementProps) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px  1000px",
      threshold: 1.0,
    }
  );

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <StyledIntersectionElement $animationSide={$animationSide} ref={ref}>
      {children}
    </StyledIntersectionElement>
  );
};
