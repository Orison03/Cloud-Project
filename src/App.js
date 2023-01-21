import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Support from "./components/Support";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Support/>
    </div>
  );
}

export default App;
