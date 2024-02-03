import { useEffect, useRef } from "react";
import {
  StyledIntersectionReveal,
  StyledIntersectionRevealProps,
  StyledIntersectionSlide,
} from "./style";
import { StyledIntersectionSlideProps } from "./style";

type IntersectionComponentProps = {
  children: React.ReactNode;
  type: "slide" | "reveal";
};

export const IntersectionComponent = ({
  children,
  type,
  $animationSide,
  $color,
}: IntersectionComponentProps & StyledIntersectionSlideProps & StyledIntersectionRevealProps) => {
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
    <>
      {type == "slide" && (
        <StyledIntersectionSlide $animationSide={$animationSide} ref={ref}>
          {children}
        </StyledIntersectionSlide>
      )}
      {type == "reveal" && (
        <StyledIntersectionReveal $color={$color} $animationSide={$animationSide} ref={ref}>
          {children}
        </StyledIntersectionReveal>
      )}
    </>
  );
};
