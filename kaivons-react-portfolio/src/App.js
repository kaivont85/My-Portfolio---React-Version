import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import './App.css';



function App() {
  return (
    <>
    
      <Navbar />
      <About />
      <Contact />
      <Work/>
      
    </>
  );
}

export default App;
