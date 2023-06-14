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

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <NavbarLeft />
      <NavbarRight />
      <Intro />
      <About />
      <Work />
    </>
  );
}

export default App;
