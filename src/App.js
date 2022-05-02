import "./App.css";

import { Blog, Features, Footer, Header, Info, Possibility } from "./containers"
import { Brand, Cta, Navbar } from "./components"

import React from "react"

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header/>
    </div>
  </div>
);

export default App;