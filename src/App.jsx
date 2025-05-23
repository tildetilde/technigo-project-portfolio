"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    try {
      AOS.init({
        duration: 800,
        once: false,
        easing: "ease-in-out",
        mirror: true,
        offset: 100,
      });
    } catch (error) {
      console.error("Error initializing AOS", error);
    }
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
