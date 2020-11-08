import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Tindercard from "./Tindercard";
import Swipebuttons from "./Swipebuttons";
import Chats from "./Chats";
import Chatscreen from "./Chatscreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          
        <Route path="/chats/:person">
            <Header backButton="/chat" />
            <Chatscreen />
          </Route>


          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <Tindercard />
            <Swipebuttons />
          </Route>
        </Switch>
      </Router>

      {/* Tinder Cards */}

      {/* Buttons below tinder cards */}

      {/* chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
