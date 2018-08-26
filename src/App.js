import React, { Component } from 'react';
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h1>Andres Arana</h1>

          <ul className="contact-information">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Ashburn, VA</span>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>ajoelarana@gmail.com</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <span>703-434-0219</span> 
            </li>
            <li>
                <i className="fas fa-laptop-code"></i>
                <span>ajarana.github.io</span>
            </li>
          </ul>   
        </header>

        <section id="skillSection" className="resumeSection">
          <h2>Skills</h2>

          <section className="subSection">
            <section className="flexSection">
              <h4 className="secondaryHeader">Front-End</h4>

              <div>
                <div className="skillList">
                  <span>JavaScript</span><span>React</span><span>Node</span><span>npm</span><span>CesiumJS</span><span>Vis.js</span><span>HTML5</span><span>CSS3</span><span>Sass</span>
                </div>
                <div className="skillList">
                  <span>LESS</span><span>Bootstrap</span><span>Foundation</span><span>Font Awesome</span><span>Mobile-First Responsive Design</span>
                </div>
              </div>
            </section>

            <section className="flexSection">
              <h4 className="secondaryHeader">Software</h4>

              <div className="skillList">
                <span>Ubuntu</span><span>macOS</span><span>Git</span><span>VS Code</span><span>Atom</span>
              </div>
            </section>
              
            <section className="flexSection">
              <h4 className="secondaryHeader">Languages</h4>

              <div className="skillList">
                <span>English</span><span>Spanish</span>
              </div>
            </section>
          </section>
          
        </section>

        <div className="separator"></div>

        <section id="workSection" className="resumeSection">
          <h2>Work Experience</h2>

          <section className="subSection">
            <section className="flexSeparated">
              <h3 className="secondaryHeader">UI Developer</h3> 
              <p>
                September 2017 - present
              </p>
            </section>

            <h4>Pragmatics</h4>

            <ul>
              <li>
                Developed responsive interfaces to present large data sets using Cesium, React, Vis.js, and other open source front-end tools
              </li>
              <li>
                Designed web applications, websites, and prototypes using mobile-first design principles
              </li>
              <li>
                Coordinated with backend developers and architects in order to build functional applications
              </li>
              <li>
                Integrated feedback from the team and customer in order to improve the existing product
              </li>
              <li>
                Interviewed new team members and trained them in the necessary front-end web technologies
              </li>
            </ul>
          </section>

          <section className="subSection">
            <section className="flexSeparated">
              <h3 className="secondaryHeader">Web Developer</h3>
              <p>October 2016 - present</p>
            </section>
            
            <h4>Freelance</h4>

            <ul>
              <li>
                Built a secure contact form for a children’s mental health practice
              </li>
              <li>
                Successfully migrated a public-facing client website
              </li>
              <li>
                Continuously perform content updates
              </li>
            </ul>
          </section>

        </section>

        <div className="separator"></div>

        <section className="resumeSection">
          <h2>Personal Projects</h2> 

          <section className="subSection">
            <section className="flexSeparated">
                <h3>ajarana.github.io</h3>
                <p>December 2016 - present</p>
           </section>
            <ul>
              <li>
                Portfolio website built and designed from scratch
              </li>
              <li>
                Hosts my personal projects including a news feed, memory game, and bootstrap website
              </li>
            </ul>
          </section>
        
        </section>

        <div className="separator"></div>

        <section className="resumeSection">
          <h2>Education</h2> 

          <section className="subSection">
            <section className="flexSeparated">
              <h3>Bachelor of Science in Chemistry</h3>
              <p>August 2012 - May 2016</p>
            </section>

            <p>College of William &amp; Mary</p>
          </section>
        </section>

      </main>
    );
  }
}

export default App;
