import { useEffect, useState, useRef } from "react";
import data from "../src/database/database";
import { useCycle, useInView } from "framer-motion";

//components
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";

//pages
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  const [lang, toggleLang] = useCycle("en", "pl");
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );
  const headerRef = useRef(null);
  const headerIsInView = useInView(headerRef);

  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <Layout isDarkMode={isDarkMode}>
      <Header headerRef={headerRef}>
        <Logo data={data[lang].logo} headerIsInView={headerIsInView} />
        <Button
          data={data[lang].buttons[0]}
          download={true}
          animation={{ name: "slideDown", headerIsInView: headerIsInView, isAnim: true }}
        />
        <Button
          data={data[lang].buttons[1]}
          animation={{ name: "slideDown", headerIsInView: headerIsInView, isAnim: true }}
        />
        <Navigation
          data={data[lang].navigation}
          lang={lang}
          toggleLang={toggleLang}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      </Header>
      <Main>
        <Projects data={data[lang].projects} />
        <About data={data[lang].about} />
        <Skills data={data[lang].skills} />
        <Contact data={data[lang].contact} />
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
