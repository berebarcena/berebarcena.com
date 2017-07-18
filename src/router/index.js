import React, { Component } from 'react';

import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Projects from '../containers/Projects';
import Project from '../containers/Project';
import About from '../containers/About';

import {
  BrowserRouter,
  Route
} from 'react-router-dom';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/projects" component={Projects}/>
          <Route path="/projects/:projectId" component={Project}/>
        </Layout>
      </BrowserRouter>
    )
  }
}
