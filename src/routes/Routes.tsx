import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RacasPage from "../pages/racas/RacasPage";
import Header from "../components/Header/header";
import "./style.css";

const Routes: React.SFC = () => {
  return (
    <Router>
      <Header />
      <div className='content'>
        <Route path='/' component={RacasPage} />
      </div>
    </Router>
  );
};

export default Routes;
