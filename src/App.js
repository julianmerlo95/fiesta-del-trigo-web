import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Index from './Components/Index/Index.component'
import Navbar from './Components/Index/Navbar.component';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path="/reinas" component=""/>
          <Route exact path="/nosotros" component=""/>
          <Route exact path="/contacto" component=""/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
