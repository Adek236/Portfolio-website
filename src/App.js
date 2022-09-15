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
import Modal from "./components/Modal/Modal"

//pages
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

//assets
import ChatIcon from "@mui/icons-material/Chat";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

function App() {
  const [isModalOpen, toggleModal] = useCycle(false,true);
  // eslint-disable-next-line
  const [lang, setLang] = useState("en");
  return (
    <Layout>
      <Modal isModalOpen={isModalOpen}/>
      <Header>
        <Logo data={data[lang].logo} />
        <Button data={data[lang].buttons[0]}>
          <FileDownloadIcon />
        </Button>
        <Button data={data[lang].buttons[1]}>
          <ChatIcon />
        </Button>
        <Navigation toggleModal={toggleModal}/>
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
