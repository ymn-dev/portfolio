import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Project from "./Components/Projects/Project";
import Skill from "./Components/Skill/Skill.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <div className="bg-black p-10 flex justify-center">
        <a href="/contact" className="border-none text-3xl text-white font-bold hover:translate-x-20 duration-200">
          Contact me now →
        </a>
      </div>
      <Project />
      <Footer />
    </>
  );
};

export default App;
