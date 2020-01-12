import React, {useState, useEffect}from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loading from './Components/Loading/Loading.component';
import Index from './Components/Index/Index.component';
import Navbar from './Components/Index/Navbar/Navbar.component';

function App() {
  const [Load , setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading({Load:true});
    }, 4000);
  },[setLoading]);

  return (
    <div className="">
      { Load ? 
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Index}/>
          <Route exact path="/eventos" component=""/>
          <Route exact path="/galeria" component=""/>
        </Switch>
      </Router>
      : <Loading/>
      }
    </div>
  );
}

export default App;
