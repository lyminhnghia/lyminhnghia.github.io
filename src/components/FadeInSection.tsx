import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

interface FadeInSectionProps {
  children: React.ReactNode;
}

const FadeInSection = (props: FadeInSectionProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
  }, []);
  return (
    <FadeContainer isVisible={isVisible} ref={domRef}>
      {props.children}
    </FadeContainer>
  );
};

export default FadeInSection;

interface FadeContainerProps {
  isVisible: boolean;
}

const FadeContainer = styled.div(
  ({ isVisible }: FadeContainerProps) => `
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1),
  transform 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  will-change: opacity, transform, visibility;
  ${
    isVisible &&
    `
    opacity: 1;
    transform: none;
    visibility: visible;
  `
  }
`
);
