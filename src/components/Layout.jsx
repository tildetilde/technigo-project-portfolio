"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  overflow: hidden;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
    padding: 0 2.5rem;
  }
`;

const SkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: 1rem;
  z-index: 999;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:focus {
    left: 1rem;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  transform: ${(props) =>
    props.visible ? "translateY(0)" : "translateY(20px)"};
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e05e00;
  }
`;

const Layout = ({ children }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <main id="main-content">
        <Container>{children}</Container>
      </main>
      <ScrollToTopButton
        $visible={showScrollButton}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </ScrollToTopButton>
    </>
  );
};

export default Layout;
