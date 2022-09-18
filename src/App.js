import { useState } from "react";
import data from "../src/database/database";
import { useCycle } from "framer-motion";

//components
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
// import Modal from "./components/Modal/Modal"

//pages
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  // const [isModalOpen, toggleModal] = useCycle(false,true);
  // eslint-disable-next-line
  const [lang, toggleLang] = useCycle("en","pl");
  const [isDarkMode, toggleDarkMode] = useCycle(false,true);

  return (
    <Layout isDarkMode={isDarkMode}>
      {/* <Modal isModalOpen={isModalOpen}/> */}
      <Header>
        <Logo data={data[lang].logo} />
        <Button data={data[lang].buttons[0]} />
        <Button data={data[lang].buttons[1]} />
        <Navigation data={data[lang].navigation} lang={lang} toggleLang={toggleLang} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode}/>
      </Header>
      <Main>
        <Projects data={data[lang].projects}/>
        <About data={data[lang].about}/>
        <Skills data={data[lang].skills}/>
        <Contact data={data[lang].contact}/>
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
