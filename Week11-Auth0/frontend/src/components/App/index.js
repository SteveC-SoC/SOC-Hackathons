import React, { useState, useEffect } from "react";
import "./App.css";
import HomePage from "../HomePage";
import Reggae from "../GenrePage/Reggae";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pop from "../GenrePage/Pop";
import HipHop from "../GenrePage/HipHop";
import ClassicRock from "../GenrePage/ClassicRock/index";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import Profile from "../Profile";
import BodyApp from "../Navbar/index";

function App() {
  return (
    <div className="App">
      <Profile />
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
