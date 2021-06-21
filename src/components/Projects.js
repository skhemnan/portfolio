import React from "react";

/* Image imports */
import filtableImage from "../assets/filtable.png";
import visitrImage from "../assets/visitr.png";

const Projects = () => {
  return (
    <div class="section" id="projects">
      <h1 className="section-title">Projects</h1>
      <div className="projects-container">
        <div className="project">
          <img class="project-image" src={visitrImage} id="visitr-image" />
          <div className="description-container">
            <p className="project-description">
              Visitr: Travel app written in HTML, CSS, and JQuery. Based on
              temperature and weather, Visitr will recommend activities and what
              to bring/pack.
            </p>
            <div className="link-container">
              <a
                className="project-link"
                href="http://github.com/skhemnan/visitr"
              >
                Repo
              </a>
              <a
                className="project-link"
                href="http://skhemnan.github.io/visitr"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img class="project-image" src={filtableImage} id="filtable-image" />
          <div className="description-container">
            <p className="project-description">
              Filtable: API to CSV converter written in React Hooks and Context.
              Paste any REST API URL, select the fields you want, and generate a
              CSV.
            </p>
            <div className="link-container">
              <a
                className="project-link"
                href="http://github.com/skhemnan/filtable"
              >
                Repo
              </a>
              <a className="project-link" href="">
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
