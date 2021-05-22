import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NotFound from './pages/NotFound';
import Home from './pages/Home'
import About from './pages/About';


const App = () => {
  return (
    //////// Mise en place du routage ///////////////
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/a-propos" exact component={About}/>
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
    //////fin routage ////////////////
  );
};

export default App;