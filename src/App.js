import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import RoomsPage from "./pages/RoomsPage";
import SingleRoomPage from "./pages/SingleRoomPage";
import DefaultPage from "./pages/DefaultPage";

import NavButton from "./components/Globals/NavButton";
import Navbar from "./components/Globals/Navbar";
import { navLinks } from "./tempLinks";

class App extends Component {
  state = {
    showNavbar: false,
    navLinks: navLinks
  };
  toggleNavbar = () => {
    this.setState({
      showNavbar: !this.state.showNavbar
    });
  };
  render() {
    return (
      <>
        <NavButton toggleNavbar={this.toggleNavbar} />
        <Navbar
          showNavbar={this.state.showNavbar}
          toggleNavbar={this.toggleNavbar}
          navLinks={this.state.navLinks}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/rooms" component={RoomsPage} />
          <Route path="/rooms/:id" component={SingleRoomPage} />
          <Route component={DefaultPage} />
        </Switch>
      </>
    );
  }
}

export default App;
