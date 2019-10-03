import React from "react";

import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Tech from "./components/Tech/Tech";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Tech />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
