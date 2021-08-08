import React from 'react';
import image from '../images/hike5280.png';
import image2 from '../images/photodrop.png';
import image3 from '../images/notetaker.png';


const Work = () => { 
 
    return (
      <div>
        <section id="my-work" className="heading2">My Work</section>
        <section id="branches">
          <div className="container">
            <div className="work-content">    
              <div className="row">
                <div className="card" style={{width: '18rem'}}>
                  <img src={image} className="card-img-top work-images" alt="project1 img" />
                  <div className="card-body">
                    <h5 className="card-title">Project #1</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://kaivont85.github.io/Group-Project-1-Trail-Finder/" className="btn btn-primary">Deployed App</a>
                    <a href="https://github.com/kaivont85/Group-Project-1-Trail-Finder" className="btn btn-primary">GitHub Repo</a>
                  </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                  <img src={image2} className="card-img-top work-images" alt="passwordgen" />
                  <div className="card-body">
                    <h5 className="card-title">Photo Drop</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://young-gorge-62627.herokuapp.com/" className="btn btn-primary">Deployed App</a>
                    <a href="https://github.com/kaivont85/Group-3-Project" className="btn btn-primary">GitHub Repo</a>
                  </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                  <img src={image3} className="card-img-top work-images" alt="coderefractor" />
                  <div className="card-body">
                    <h5 className="card-title">Note Taker</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://protected-cliffs-76829.herokuapp.com/" className="btn btn-primary">Deployed App</a>
                    <a href="https://github.com/kaivont85/Note-Taker" className="btn btn-primary">GitHub Repo</a>
                  </div>
                </div>
              </div>
            </div></div></section></div>
    );
  }
;

export default Work;