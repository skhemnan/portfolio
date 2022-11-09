import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiBookOpen,
  FiGithub,
  FiAtSign,
  FiLinkedin,
  FiArrowLeft,
  FiArrowDownCircle
} from "react-icons/fi";

import About from './sections/About'

const Info = () => {

  const [heading, setHeading] = useState(0)
  const [section, setSection] = useState({})

  useEffect(() => {
    if(Object.keys(section).length != 0){
      setHeading(section.id)
    } else {
      setHeading(0)
    }
  },[section])

  const titles = [
    {id: 1, name: 'about', title: 'about me.', link: '', icon: <FiBookOpen/>, content: <About/>},
    {id: 2, name: 'github', title: 'browse my github.', link: 'http://www.github.com/skhemnan', icon: <FiGithub/>},
    {id: 3, name: 'linkedin', title: 'visit my linkedin.', link: 'http://www.linkedin.com/in/hellosaahil', icon: <FiLinkedin/>},
    {id: 4, name: 'email', title: 'send me an email.', link: 'mailto:saahil.khemlani@gmail.com', icon: <FiAtSign/>},
    {id: 5, name: 'resume', title: 'download my resume.', link: 'https://drive.google.com/file/d/1h4otNwpJjGQnBF4L6NROs7OJYbJcH7Db/view?usp=sharing', icon: <FiArrowDownCircle/>}
  ]

  return (
    <AnimatePresence>
      {Object.keys(section).length != 0 &&
         <div class='back'><h3 class="arrow" onClick={() => {setSection({})}}><FiArrowLeft/></h3></div>
      }
         <div class="info">
            {(heading === 0 && Object.keys(section).length === 0) ? 
              <>
                <h1 class="main-title">Saahil Khemnani</h1>
                <h2 className="subtitle">
                  App Developer. Product Analyst. Tech enthusiast.
                </h2>
              </>
              :
              <>
                {titles.map(x => {
                  if(x.id === heading){
                    return <h1 class={section.title == x.title ? 'section-title' : "title"}>{x.title}</h1>
                  }
                })} 
                {(Object.keys(section).length != 0) && <>{section.content}</>} 
              </>
            }
            <div className={(Object.keys(section).length === 0) ? "social-container" : 'social-container-bottom'}>
              {titles.map(x => {
                return (
                  <div className="social-links">
                    {[2,3,4,5].indexOf(x.id) != -1 ? 
                    <>
                     <a
                      onMouseEnter={() => {if(Object.keys(section).length === 0){setHeading(x.id)}}}
                      onMouseLeave={() => {if(Object.keys(section).length === 0){setHeading(0)}}}
                      className="social-link"
                      href={x.link}
                    >{x.icon}</a> 
                    <a class="social-text" href={x.link}>{x.title}</a>                   
                    </>
                    :
                    <>
                     <h3
                      onMouseEnter={() => {if(Object.keys(section).length === 0){setHeading(x.id)}}}
                      onMouseLeave={() => {if(Object.keys(section).length === 0){setHeading(0)}}}
                      className="social-link"
                      onClick={() => {setSection(x)}}
                    >{x.icon}</h3> 
                    <h3 class="social-text" onClick={() => {setSection(x)}}>{x.title}</h3>
                    </>
                   }
                  </div>
                )
              })}
           </div>
          </div>
    </AnimatePresence>
  );
};

export default Info;
