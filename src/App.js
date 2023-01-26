import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Support from "./components/Support";
import AllInOne from "./components/AllInOne";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
    </div>
  );
}

export default App;
