import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiArchive,
  FiGithub,
  FiAtSign,
  FiLinkedin,
} from "react-icons/fi";

const Info = () => {
  // const [showEmail, setShowEmail] = useState(false);
  // const [showGithub, setShowGithub] = useState(false);
  // const [showLinkedin, setShowLinkedin] = useState(false);

  const [heading, setHeading] = useState(0)

  const titles = [
    {id: 1, name: 'about', title: 'about me.', link: ''},
    {id: 2, name: 'email', title: 'send me an email.', link: 'mailto:saahil.khemlani@gmail.com'},
    {id: 3, name: 'github', title: 'browse my github.', link: 'http://www.github.com/skhemnan'},
    {id: 4, name: 'linkedin', title: 'visit my linkedin.', link: 'http://www.github.com/in/hellosaahil'},
    {id: 5, name: 'projects', title: 'about my work.', link: ''}
  ]

  return (
    <>
        <div>
          <div class="info">
            {heading == 0 ? 
              <>
                <h1 class="main-title">Hello, I'm Saahil.</h1>
                <h2 className="subtitle">
                  {/* App Developer • Product analyst • Tech enthusiast */}
                  App Developer. Product Analyst. Tech enthusiast.
                </h2>
              </>
              :
              <>
                {titles.map(x => {
                  if(x.id === heading){
                    return <h1 class="title">{x.title}</h1>
                  }
                })} 
              </>
            }
            <div className="social-container">
              {titles.map(x => {
                return (
                  <div className="social-links">
                    <a
                      onMouseEnter={() => setHeading(x.id)}
                      onMouseLeave={() => setHeading(0)}
                      className="social-link"
                      href={x.link}
                    >
                      {
                        x.id === 1 ? <FiAlertCircle/> : x.id === 2 ? <FiAtSign/> : x.id === 3 ? <FiGithub/> : x.id === 4 ? <FiLinkedin/> : <FiArchive/>
                      }  
                    </a> 
                    <a class="social-text" href={x.link}>{x.title}</a>
                  </div>
                )
              })}
{/* 
              <div className="social-links">
                <a
                  onMouseEnter={() => setHeading(1)}
                  onMouseLeave={() => setHeading(0)}
                  className="social-link"
                  href="mailto:saahil.khemlani@gmail.com"
                >
                  <FiAlertCircle />
                </a>
                <a
                  onMouseEnter={() => setHeading(2)}
                  onMouseLeave={() => setHeading(0)}
                  className="social-link"
                  href="mailto:saahil.khemlani@gmail.com"
                >
                  <FiAtSign />
                </a>
                <a
                  onMouseEnter={() => setHeading(3)}
                  onMouseLeave={() => setHeading(0)}
                  className="social-link"
                  href="http://www.github.com/skhemnan"
                >
                  <FiGithub />
                </a>
                <a
                  onMouseEnter={() => setHeading(4)}
                  onMouseLeave={() => setHeading(0)}
                  className="social-link"
                  href="http://www.github.com/in/hellosaahil"
                >
                 <FiLinkedin />
                </a>
                <a
                  onMouseEnter={() => setHeading(5)}
                  onMouseLeave={() => setHeading(0)}
                  className="social-link"
                  href="mailto:saahil.khemlani@gmail.com"
                >
                  <FiArchive />
                </a>
              </div> */}
            </div>
          </div>
        </div>
    </>
  );
};

export default Info;
