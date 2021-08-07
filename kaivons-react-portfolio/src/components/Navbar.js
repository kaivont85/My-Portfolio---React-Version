import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './FontAwesomeIcons/index'





export default class Navbar extends React.Component{
  render()  {
    return (
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  {/* <a class="navbar-brand">Home</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      
      <a class="nav-item nav-link" href="#About">About Me</a>
      <a class="nav-item nav-link" href="#Work">My Projects</a>
      <a class="nav-item nav-link" href="#Contact">Contact Me</a>
      {/* <a class="nav-item nav-link" href="#">Disabled</a>
      <a class="nav-item nav-link" href="#">Disabled</a> */}
      <a class="nav-item nav-link active" href="https://github.com/kaivont85">
        fa-github-square
        <FontAwesomeIcon icon="github-square" />
        <span class="sr-only">(current)</span></a> 
    </div>
  </div>
</nav>
            
          );
        }
      };
     
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