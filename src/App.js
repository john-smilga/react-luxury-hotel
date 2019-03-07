import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavButton from "./components/Globals/NavButton";
import Navbar from "./components/Globals/Navbar";
import { navLinks } from "./tempLinks";

import { Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import Rooms from "./components/Pages/RoomsPage/Rooms";
import SingleRoom from "./components/Pages/SingleRoom/Single";
import Default from "./components/Pages/Default";
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
          <Route exact path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/room" component={SingleRoom} />
          <Route component={Default} />
        </Switch>
      </>
    );
  }
}

export default App;
