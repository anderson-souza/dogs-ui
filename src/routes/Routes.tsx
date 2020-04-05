import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RacasPage from "../pages/racas/RacasPage";

const Routes: React.SFC = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={RacasPage} />
      </div>
    </Router>
  );
};

export default Routes;
