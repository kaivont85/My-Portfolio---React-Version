import React from 'react';
import image from '../images/headshot.jpg';

export default class About extends React.Component{
    render() {
      return (
        <div>
          <section id="about-me" className="heading1">About Me</section>
          <section id="branches">
            <div className="container">
              <img className="img-me" src="./src/images/headshot.jpg" alt="me"  /></div>  
            <p className="text">My name is Kaivon Tolooee and I am a student currently enrolled at DU's Full Stack Coding Bootcamp.
              I enjoy listening to and playing music, spending time with family &amp; friends, cultures, languages,
              watching movies, meeting new people and being in nature and people watching.I am interested in learning, 
              connecting and creating dialogue through music, cooking and all other forms of communication and expressions 
              of art. Websites, blogs and different avenues throughout the World Wide Web grants us with 
              a bridge to be able to connect to people all over the world and that is what I look to accomplish, and 
              what I want to help others accomplish, being in this field. 
            </p>
          </section>
        </div>
      );
    }
  };





