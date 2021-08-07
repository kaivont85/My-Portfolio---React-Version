import React from 'react';
import image from './src/images/Kaivon Tolooee Resume 2021 - Full Stack Programmer (1).pdf';

const Navbar = () => {


    return (
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/**
   *         nav links                                   sites
   * 
   */}
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <div className="nav-links">
        <a className="nav-item nav-link" href="#About">About Me</a>
        <a className="nav-item nav-link" href="#Work">My Projects</a>
        <a className="nav-item nav-link" href="#Contact">Contact Me</a>
      </div>
      <div className="sites">
        <ul className="navbar">
          <li><a href="https://github.com/kaivont85">GitHub</a></li>
          <li><a href="https://www.instagram.com/kaivon_tolooee/">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/kaivon-tolooee-483321204/">Linkedin</a></li>
          <li><a href={image}>Resume</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
            
          );
        }
      ;

export default Navbar;    

      // fa-github-square, fa-linkedin, fa-envelope-square, fa-instagram

     
              //   <ul classname="main_menu">
              //     <li><a href="#about-me">About Me</a></li>
              //     <li><a href="#my-work">My Work</a></li>
              //     <li><a href="#contact">Contact</a></li>
              //     <li><a href="https://github.com/kaivont85"><i classname="fab fa-github" /></a></li><i classname="fab fa-github">
              //       <li><a href="https://www.linkedin.com/in/kaivon-tolooee-483321204/"><i classname="fab fa-linkedin" /></a></li><i classname="fab fa-linkedin">
              //         <li><a href="https://www.instagram.com/kaivon_tolooee/"><i classname="fab fa-instagram" /></a></li><i classname="fab fa-instagram">
              //           <li><a href="assets/images\Kaivon Tolooee Resume 2021 - Full Stack Programmer (1).pdf"><i classname="fas fa-file-pdf" /></a></li><i classname="fas fa-file-pdf">             
              //           </i></i></i></i></ul><i classname="fab fa-github"><i classname="fab fa-linkedin"><i classname="fab fa-instagram"><i classname="fas fa-file-pdf">  
              //         </i></i></i></i></nav><i classname="fab fa-github"><i classname="fab fa-linkedin"><i classname="fab fa-instagram"><i classname="fas fa-file-pdf">
              //       </i></i></i></i></div> */}