//components
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

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
        <Navigation />
      </Header>
      <Main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Main>
      <Footer />
    </Layout>
  );
}

export default App;
