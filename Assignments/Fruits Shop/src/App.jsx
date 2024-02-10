import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Fruits from "./Components/Fruits";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <Fruits/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
