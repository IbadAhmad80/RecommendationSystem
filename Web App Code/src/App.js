import "./App.css";
import React from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import { Switch, Route } from "react-router";
import About from "./components/about";
import SignIn from "./components/accounts/sign-in";
import Dashboard from "./components/dashboard";
import Places from "./components/places/index";
import PlaceDetails from "./components/places/PlaceDetail/placeDetails";
import AdminPanel from "./admin-panel/index";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/search" component={Places} exact />
        <Route path="/places-details" component={PlaceDetails} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/admin-panel" component={AdminPanel} exact />
      </Switch>
    </div>
  );
}

export default App;
