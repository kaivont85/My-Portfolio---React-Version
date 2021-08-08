import React from 'react';
import {Link} from 'react-router-dom'




const Navbar = () => {


    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <div className="nav-links">
        <Link className="nav-item nav-link" to="/">About Me</Link>
        <Link className="nav-item nav-link" to="/work">My Projects</Link>
        <Link className="nav-item nav-link" to="/contact">Contact Me</Link>
        <li><a href="https://github.com/kaivont85">GitHub</a></li>
        <li><a href="https://www.instagram.com/kaivon_tolooee/">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/kaivon-tolooee-483321204/">Linkedin</a></li>
        <li><a href="https://drive.google.com/file/d/1I5ygdY0Xc52PTES0MdSVvOfxfJ8jOPOR/view?ths=true">Resume</a></li>
      </div>
    </div>
  </div>
</nav>
  
  );
}

export default Navbar;    

