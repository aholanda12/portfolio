import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/AboutCard";
import Projects from "./pages/Projects";
import Contact from "./components/ContactCard/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Background from "./components/Background";

function App() {
  return (
    <Router>
      <div>
        <Header>Ashley Holanda</Header>
        <NavTabs />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/" component={Contact} />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
