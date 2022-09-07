//components
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";
import Logo from "./components/CurrentPage/Logo";

//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Layout>
      <Header>
        <Logo />
        <Button title="Download CV" bgColor="secondary"/>
        <Button title="Let's Talk"/>
        <Navigation />
      </Header>
      <Main>
        <Home/>
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
