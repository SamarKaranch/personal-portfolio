import { Helmet } from "react-helmet";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Samar Karanch</title>
        <link rel="canonical" href="https://samarkaranch.vercel.app/"/>
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
