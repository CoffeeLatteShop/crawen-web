import "./App.css";

import { Blog, Features, Footer, Header, Possibility, WhatCrawenOS } from "./containers"
import { Brand, Cta, Navbar } from "./components"

import React from "react"

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatCrawenOS />
    <Features />
    <Possibility />
    <Cta />
    <Blog />
    <Footer />
  </div>
);

export default App;