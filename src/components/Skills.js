import React from "react";

const Skills = () => {
  return (
    <div class="section" id="skill-section">
      <h3 className="section-title">Skills</h3>
      <div className="skill-section">
        <div className="skill-container">
          <h4 className="skill">HTML/CSS/Javascript</h4>
        </div>
        <div className="skill-container">
          <h4 style={{ width: 240 }} className="skill">
            NodeJS/ExpressJS
          </h4>
        </div>
        <div className="skill-container">
          <h4 style={{ width: 120 }} className="skill">
            PostgreSQL
          </h4>
        </div>
        <div className="skill-container">
          <h4 style={{ width: 350 }} className="skill">
            ReactJS
          </h4>
        </div>
        <div className="skill-container">
          <h4 style={{ width: 270 }} className="skill">
            Git
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
