import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./views/home";
import Article from "./views/article";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/article">Article</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/article" component={Article} />
        </div>
      </div>
    </Router>
  );
}

export default App;
