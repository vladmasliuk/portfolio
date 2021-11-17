import React from "react";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import homePage from './pages/homePage';
import notFoundPage from './pages/notFoundPage';

// components
import Header from './components/Header/Header';
import Cursor from './components/Cursor/Cursor';

function App() {
  return (
    <Router>
      <Header/>
      <Cursor/>
      <div id="page-wrap">
        <Switch>
          <Route exact path="/" component={homePage}/>
          <Route path="" component={notFoundPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;