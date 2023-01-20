import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
    </div>
  );
}

export default App;
