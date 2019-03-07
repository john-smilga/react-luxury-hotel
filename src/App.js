import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavButton from "./components/Globals/NavButton";
import Sidebar from "./components/Globals/Sidebar";
import Home from "./components/Pages/HomePage/Home";
import Rooms from "./components/Pages/RoomsPage/Rooms";
import SingleRoom from "./components/Pages/SingleRoom/Single";
import Default from "./components/Pages/Default";
class App extends Component {
  render() {
    return (
      <>
        <NavButton />
        {/* <Sidebar /> */}
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
