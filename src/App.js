import "./App.css";

import { Brand, Navbar } from "./components"
import { Features, Footer, Info, Whatcrawenos } from "./containers"

import React from "react"

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Info/>
    </div>
      <Brand/>
      <Whatcrawenos/>
      <Features/>
      <Footer/>
  </div>
);

export default App;