import { useState, useEffect } from "react";
import "./App.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/compounds/Navbar/Navbar";
import NavbarLeft from "./components/compounds/NavbarLeft/NavbarLeft";
import NavbarRight from "./components/compounds/NavbarRight/NavbarRight";
import Intro from "./components/Section/Intro/Intro";
import About from "./components/Section/About/About";
import Work from "./components/Section/Work/Work";
import Projects from "./components/Section/Projects/Projects";
import Blog from "./components/Section/Blog/Blog";
import Contact from "./components/Section/Contact/Contact";
import Footer from "./components/compounds/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({ offset: 250, duration: 500 });
    window.addEventListener(
      "scroll",
      () => {
        document.body.style.setProperty(
          "--scroll",
          window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
      },
      false
    );
  }, []);

  return (
    <>
      <Navbar />
      <NavbarLeft />
      <NavbarRight />
      <Intro />
      <About />
      <Work />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
