import React, { Component } from "react";
//import axios from axios;

import './App.css';
import CityImagesList from "./components/CityImagesList.js";
import BackgroundHeader from "./components/BackgroundHeader.js";
//import Favourites from "./components/favourites.js";
//import Footer from "./components/Footer.js";
import Home from "./components/home.js";
import Map from "./components/Map/Map.js";
import NavBar from "./components/Navbar";


import {
  BrowserRouter as Router,
  Switch,
  Route,
 // Link,
  Redirect
} from "react-router-dom";

class App extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        property: [],
        isUserAuthenticated: true
      };
    };
 

    render() {
          return (
    <div className="App">
      {/* <Map/> */}
        <Router>
        <NavBar />
        <BackgroundHeader />
        
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route
                exact
                path="/"
                render={() => {
                    return (
                      this.state.isUserAuthenticated ?
                      <Redirect to="/home" /> :
                      <Redirect to="/map" /> 
                    )
                }}
              />
          <Route path="/home" component={Home}>
            <Home />
          </Route>
          <Route path="/map" component={Map}>
            <Map />
          </Route> 
           {/* <Route path="/favourites" component={Favourites}>
            <Favourites />
          </Route> */}
        </Switch>
    </Router>
    {/* <Infobox/> */}
    <CityImagesList />
    {/* <Footer /> */}
    </div>
    );
  }
}


export default App;