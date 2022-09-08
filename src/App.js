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

//assets
import ChatIcon from "@mui/icons-material/Chat";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function App() {
  return (
    <Layout>
      <Header>
        <Logo />
        <Button shortTitle="CV" longTitle="Download CV" link="/">
          <FileDownloadIcon />
        </Button>
        <Button longTitle="Let's Talk" link="/">
          <ChatIcon />
        </Button>
        <Navigation />
      </Header>
      <Main>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
