import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import './App.css';



function App() {
  return (
  
    <div className="App">
      
      <Router>
      <Navbar /> 
        <Switch> 
        <Route exact path="/" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        
</Switch>
</Router>
     </div> 
    
  );
}

export default App;
