import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigationbar from "./components/Navbar/Navigationbar";

import Root from "./components/Pages/Root";
import News from "./components/Pages/News";
import Stream from "./components/Pages/Stream";
import Tutorials from "./components/Pages/Tutorials";
import Downloads from "./components/Pages/Downloads";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import Register from "./components/Pages/Register";
import Update from "./components/Pages/Update";
import Login from "./components/Pages/Login";
import BlackzspaceOS from "./components/Pages/BlackzspaceOS";



export function App() {
  return (         
    <Router>
    <Navigationbar />
    <Switch>
      <Route exact path="/" component={Root} />
      <Route path="/board" />
      <Route path="/news" component={News} />
      <Route path="/tutorials" component={Tutorials} />
      <Route path="/projects" component={Projects} />
      <Route path="/downloads" component={Downloads} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/blackzspace-os" component={BlackzspaceOS} />
      <Route path="/update" component={Update} />

      <Route path="/stream" component={Stream} />

    </Switch>
  </Router>
  );
  }
  export default App;