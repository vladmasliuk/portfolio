import React from "react";

// router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// pages
import homePage from './pages/homePage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectPage from './pages/ProjectPage';

// components
import Cursor from './components/Cursor/Cursor';

// data
import projects from './projects';

function App() {
  return (
    <Router>
      <Cursor/>
        <Switch>
          <Route exact path="/" component={homePage}/>
          <Route exact path="/project/:id" render={({match}) => (
            <ProjectPage project={projects.find(p => p.id === match.params.id)} />
          )} />
          <Route path="*" component={NotFoundPage}/>
        </Switch>
    </Router>
  );
}

export default App;