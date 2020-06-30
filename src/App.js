import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OurCoords from "./pages/Coords/OurCoords/OurCoords";
import BeACoord from "./pages/Coords/BeACoord/BeACoord";
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
            <Route exact path="/our-coords" component={OurCoords} />
            <Route exact path="/be-a-coord" component={BeACoord} />
          </Switch>
        </Container>
      </Router>
    </ParallaxProvider>
  );
}
