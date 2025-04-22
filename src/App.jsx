import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { theme } from "./theme";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Hero />
        <Skills />
        <Projects />
        <Tech />
        <Journey />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
