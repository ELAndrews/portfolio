import React from "react";
import { Route, useHistory } from "react-router-dom";
import Header from "./components/header";
import IntroPage from "./components/introPage";
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact"
import Footer from "./components/footer";

function App() {

  const history = useHistory()

  const handleClick = e => {
    document.getElementById("introContainer").classList.add("fade-out");
    // document.getElementById("homeContainer").classList.add("fade-in");
    setTimeout(function () {
      history.push("/home")
    }, 5000)
  }

  return (
    <div className="App">
      <Route exact path="/" render={() => <IntroPage handleClick={handleClick} />} />
      <Header />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div >
  );
}

export default App;
