import "./App.css";

import { Brand, Navbar } from "./components"
import { Header, Whatcrawenos } from "./containers"

import React from "react"

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header/>
    </div>
      <Brand/>
      <Whatcrawenos/>
  </div>
);

export default App;