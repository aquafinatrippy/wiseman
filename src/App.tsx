import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/home";
import Article from "./views/article";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sideNav">
          <Navbar />
        </div>
        <div className="mainContent">
          <Route path="/" exact component={Home} />
          <Route path="/article" component={Article} />
        </div>
      </div>
    </Router>
  );
}

export default App;
