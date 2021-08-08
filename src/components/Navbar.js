import React from 'react';
import {Link} from 'react-router-dom'
import image from '../images/instagram-logo.png';
import image2 from '../images/github1.png';
import image3 from '../images/linkedin1.png';
import image4 from '../images/pdf1.png';




const Navbar = () => {


    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <div className="nav-links d-flex flex-row">
  <Link className="nav-item nav-link" to="/">About Me</Link>
  <Link className="nav-item nav-link" to="/work">My Projects</Link>
  <Link className="nav-item nav-link" to="/contact">Contact Me</Link>
  <li><a href="https://github.com/kaivont85"><img src={image2} className="card-img-top work-images" alt="project1 img" /></a></li>
  <li><a href="https://www.instagram.com/kaivon_tolooee/"><img src={image} className="card-img-top work-images" alt="project1 img" /></a></li>
  <li><a href="https://www.linkedin.com/in/kaivon-tolooee-483321204/"><img src={image3} className="card-img-top work-images" alt="project1 img" /></a></li>
  <li><a href="https://drive.google.com/file/d/1I5ygdY0Xc52PTES0MdSVvOfxfJ8jOPOR/view?ths=true"><img src={image4} className="card-img-top work-images" alt="project1 img" /></a></li>
      </div>
    </div>
  </div>
</nav>

  );
}

export default Navbar;