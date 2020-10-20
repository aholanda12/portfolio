import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
