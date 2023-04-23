import React from "react";
import "./globalStyle.css";

// components=============
import Navbar from "./Components/Navbar/Navbar";
import MainContainer from "./Components/MainContainer/MainContainer";

function App() {
  return (
    <div className="App bg-primary">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
