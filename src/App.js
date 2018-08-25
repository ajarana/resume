import React, { Component } from 'react';
import './scss/main.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1>Andres Arana</h1>
        <div>
          <i class="fas fa-laptop-code"></i>
          ajarana.github.io
        </div>

        <ul className="contact-information">
          <li>
            <i class="fas fa-map-marker-alt"></i>
            Ashburn, VA
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            ajoelarana@gmail.com
          </li>
          <li>
            <i class="fas fa-mobile-alt"></i>
            (703) 434-0219 
          </li>
          <li>
            <i class="fab fa-github"></i>
            github.com/ajarana
          </li>
        </ul>  

        <section>
          <h2>Skills</h2>

          <section className="flexSection">
            <h3 className="secondaryHeader">Front-End Tools</h3>

            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>LESS</li>
              <li>Sass</li>
              <li>JavaScript (ES5/ES6)</li>
              <li>Node/npm</li>
              <li>React</li>
              <li>Bootstrap</li>
              <li>Foundation</li>
              <li>CesiumJS</li>
              <li>Vis.js</li>
              <li>Font Awesome 5</li>
            </ul>
          </section>
          
          <section className="flexSection">
            <h3 className="secondaryHeader">Visual Design</h3>

            <ul>
              <li>Mobile-First Design</li>
              <li>Grid-Based Layouts</li>
            </ul>
          </section>

          <section className="flexSection">
            <h3 className="secondaryHeader">Software</h3>

            <ul>
              <li>Git</li>
              <li>Ubuntu/macOS</li>
              <li>VS Code</li>
              <li>Atom</li>
            </ul>
          </section>
            
          <section className="flexSection">
            <h3 className="secondaryHeader">Languages</h3>
            <p>
              English | Spanish
            </p>
          </section>
        </section>

        <section>
          <h2>Education</h2> 
            <section className="flexSeparated">
              <h4>College of William & Mary</h4>
              <p>Williamsburg, VA</p>
            </section>
          <p>
            Bachelor of Science in Chemistry, May 2016
          </p>
        </section>

        <section>
          <h2>Work Experience</h2>

          <section>
            <section className="flexSeparated">
              <h3 className="secondaryHeader">Pragmatics</h3> 
              <p>
                September 2017 - present
              </p>
            </section>

            <h4>
              UI Developer
            </h4>

            <ul>
              <li>
                Code responsive interfaces that present large data sets to users using Cesium, React, Vis.js, and other open-source front-end tools
              </li>
              <li>
                Design web applications with data accessibility in mind through mobile-first design and cross-browser compatible code. 
              </li>
              <li>
                Coordinate with backend developers and architects in order to build robust and functional applications
              </li>
              <li>
                Integrate feedback from both the team and customer in order to ensure the product meets user goals
              </li>
              <li>
                Interview new team members and train them in the latest front-end web technologies
              </li>
            </ul>
          </section>

          <section className="flexSeparated">
            <h3 className="secondaryHeader">Freelance</h3>
            <p>October 2016 - Present</p>
          </section>
          
          <h4>UI Developer</h4>

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

          <h3 className="secondaryHeader">Personal Projects</h3>

          <h4>ajarana.github.io</h4>
          <ul>
            <li>
              Portfolio website built and designed from scratch
            </li>
            <li>
              Hosts my personal projects including a news feed, memory game, and bootstrap website
            </li>
          </ul>
        </section>

      </main>
    );
  }
}

export default App;
