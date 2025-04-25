"use client";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
// import Tech from "./components/Tech";
// import Journey from "./components/Journey";
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
        mirror: true,
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
        {/* <Tech /> */}
        {/* <Journey /> */}
main
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
