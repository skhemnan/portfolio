import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiArchive,
  FiGithub,
  FiAtSign,
  FiLinkedin,
  FiArrowLeft,
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
    {id: 1, name: 'about', title: 'about me.', link: '', icon: <FiAlertCircle/>, content: <About handleClick={() => {setSection(titles[1])}}/>},
    {id: 2, name: 'projects', title: 'about my work.', link: '', icon: <FiArchive/>, content: () => {return <p>hello</p>}},
    {id: 3, name: 'github', title: 'browse my github.', link: 'http://www.github.com/skhemnan', icon: <FiGithub/>},
    {id: 4, name: 'linkedin', title: 'visit my linkedin.', link: 'http://www.linkedin.com/in/hellosaahil', icon: <FiLinkedin/>},
    {id: 5, name: 'email', title: 'send me an email.', link: 'mailto:saahil.khemlani@gmail.com', icon: <FiAtSign/>}
  ]

  return (
    <AnimatePresence>
      {Object.keys(section).length != 0 &&
         <div class='back'><h3 class="arrow" onClick={() => {setSection({})}}><FiArrowLeft/></h3></div>
      }
         <div class="info">
            {(heading === 0 && Object.keys(section).length === 0) ? 
              <>
                <h1 class="main-title">Hello. I'm Saahil.</h1>
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
            <div className="social-container">
              {titles.map(x => {
                return (
                  <div className="social-links">
                    {[3,4,5].indexOf(x.id) != -1 ? 
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
