import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/header";
import IntroPage from "./components/introPage";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact"
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Route path="/" component={IntroPage} /> */}
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  );
}

export default App;
