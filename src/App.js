import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import { ParallaxProvider } from "react-scroll-parallax";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import OurCoords from "./pages/Coords/OurCoords/OurCoords";
import BeACoord from "./pages/Coords/BeACoord/BeACoord";
import PastFS from "./pages/PastFS/PastFS";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <ParallaxProvider>
      <Router>
        <Container fluid>
          <Nav />
          <Switch>
            <Route exact path="/fs-website" component={Home} />
            <Route exact path="/fs-website/about" component={About} />
            <Route exact path="/fs-website/our-coords" component={OurCoords} />
            <Route exact path="/fs-website/be-a-coord" component={BeACoord} />
            <Route exact path="/fs-website/past-fs" component={PastFS} />
          </Switch>
          <Footer />
        </Container>
      </Router>
    </ParallaxProvider>
  );
}
