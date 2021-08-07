import React from 'react';

export default class work extends React.Component{ 
  render() {
    return (
      <div>
        <section id="my-work" className="heading2">My Work</section>
        <section id="branches">
          <div className="container">
            <div className="work-content">    
              <div className="row">
                <div className="card" style={{width: '18rem'}}>
                  <img src="assets/images/project1.png" className="card-img-top work-images" alt="project1 img" />
                  <div className="card-body">
                    <h5 className="card-title">Project #1</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://kaivont85.github.io/Group-Project-1-Trail-Finder/" className="btn btn-primary">Deployed App</a>
                    <a href="https://github.com/kaivont85/Group-Project-1-Trail-Finder" className="btn btn-primary">GitHub Repo</a>
                  </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                  <img src="assets/images/passwordgen.png" className="card-img-top work-images" alt="passwordgen" />
                  <div className="card-body">
                    <h5 className="card-title">Password Gen</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://kaivont85.github.io/Password-Generator/" className="btn btn-primary">Deployed App</a>
                    <a href="https://github.com/kaivont85/Password-Generator" className="btn btn-primary">GitHub Repo</a>
                  </div>
                </div>
                <div className="card" style={{width: '18rem'}}>
                  <img src="assets/images/coderefractor.png" className="card-img-top work-images" alt="coderefractor" />
                  <div className="card-body">
                    <h5 className="card-title">Code Refractor</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://kaivont85.github.io/Git-Code-Refactor/" className="btn btn-primary">Deployed App</a>
                    <a href="https://github.com/kaivont85/Git-Code-Refactor" className="btn btn-primary">GitHub Repo</a>
                  </div>
                </div>
              </div>
            </div></div></section></div>
    );
  }
};

