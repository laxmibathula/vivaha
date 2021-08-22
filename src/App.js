import React from "react";
import "./App.scss";
import Registration from "./registration";

function App() {
  const raji = (abc) => {
    console.log("raji");
  };

  return (
    <div className="App">
      <h1>welcome vivaha</h1>
      <h1>welcome Macbook</h1>

      <Registration />
    </div>
  );
}

export default App;
