import React from "react";

import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Nav from "./components/Nav/Nav";
import Tech from "./components/Tech/Tech";

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Nav />
      <Tech />
    </div>
  );
}

export default App;
