import React, { Component } from "react";
import TopBar from "./components/header/TopBar";
import SideBar from "./components/sideBar/SideBar";
import "./app.css";
import Home from "./components/pages/home/Home";

function App() {
  return (
    <div>
      <TopBar />
      <div className="container">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
