import React from "react";
import Header from "./components/Header/header";
import "./App.css";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes />
    </div>
  );
}

export default App;
