import React from "react";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import homePage from './pages/homePage';
import notFoundPage from './pages/notFoundPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={homePage}/>
        <Route path="" component={notFoundPage}/>
      </Switch>
    </Router>
  );
}

export default App;