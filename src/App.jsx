import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Contact from "./Components/Contact/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
