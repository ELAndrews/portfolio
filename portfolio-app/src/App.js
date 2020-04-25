import React from "react";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact"
import Footer from "./components/footer";


function App() {


  return (
    <div className="App">
      <Header />
      <a id="home"></a>
      <Home className="home" />
      <a id="about"></a>
      <About className="about" />
      <Work className="work" />
      <a id="contact"></a>
      <Contact className="contact" />
      <Footer />
    </div >
  );
}

export default App;