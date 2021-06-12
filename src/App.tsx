import React from "react";
import "./App.scss";
import { fetchArticle } from "./api";

function App() {
  console.log(fetchArticle());
  // useEffect(async () => {
  //   // effect
  //   const data = await fetchArticle();
  //   console.log(data);
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, []);

  return (
    <div className="App">
      <h1>app</h1>
    </div>
  );
}

export default App;
