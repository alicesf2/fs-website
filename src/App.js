import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Nav from "./components/Nav/Nav";

import "./App.css";

export default function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Container fluid>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <About />
          </Switch>
        </Container>
      </Router>
    </ParallaxProvider>
  );
}
