import React from "react";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectPage from './pages/ProjectPage';

// components
import Header from './components/Header/Header';
import Cursor from './components/Cursor/Cursor';

// data
import projects from './projects';

function App() {
  return (
    <Router>
      <Header/>
      <Cursor/>
      <div id="page-wrap">
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/project/:id" render={({match}) => (
            <ProjectPage project={projects.find(p => p.id === match.params.id)} />
          )} />

          <Route path="" component={NotFoundPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;