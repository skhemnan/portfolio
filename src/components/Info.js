import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Switch from 'react-switch'
import {
  FiBookOpen,
  FiGithub,
  FiAtSign,
  FiLinkedin,
  FiArrowLeft,
  FiArrowDownCircle,
  FiSun
} from "react-icons/fi";
import {
  BsMoon,
  BsSun
} from "react-icons/bs"

import About from './sections/About'

const Info = ({darkEnabled, setDarkEnabled}) => {

  const [heading, setHeading] = useState(0)
  const [section, setSection] = useState({})

  let switchProps = {
      checkedIcon: <FiSun color="#26293D" fontSize={18} style={{
          marginLeft: 5.5,
          marginTop: 4.2,
          alignSelf: "center"
        }}
      />,
      uncheckedIcon: <BsMoon color="white" fontSize={18} style={{
          marginLeft: 5.5,
          marginTop: 4.2,
          alignSelf: "center"
        }}
      />,
      checked: darkEnabled,
      onChange: x => setDarkEnabled(x),
      offColor: "#26293D",
      onColor: "#F1EDD7"
  }

  let colorSwitch = darkEnabled ? 'white' : 'black'

  useEffect(() => {
    if(Object.keys(section).length != 0){
      setHeading(section.id)
    } else {
      setHeading(0)
    }
  },[section])

  const titles = [
    {id: 1, name: 'about', title: 'about me.', link: '', icon: <FiBookOpen/>},
    {id: 2, name: 'github', title: 'browse my github.', link: 'http://www.github.com/skhemnan', icon: <FiGithub/>},
    {id: 3, name: 'linkedin', title: 'visit my linkedin.', link: 'http://www.linkedin.com/in/hellosaahil', icon: <FiLinkedin/>},
    {id: 4, name: 'email', title: 'send me an email.', link: 'mailto:saahil.khemlani@gmail.com', icon: <FiAtSign/>},
    {id: 5, name: 'resume', title: 'download my resume.', link: 'https://drive.google.com/file/d/1htEBIBYMCooSwsfpIeZO8ANj2FPgeqv2/view?usp=share_link', icon: <FiArrowDownCircle/>}
  ]

  return (
    <AnimatePresence>
      {Object.keys(section).length != 0 && <div className='back'><h3 className="arrow" style={{color: colorSwitch}} onClick={() => {setSection({})}}><FiArrowLeft/></h3></div> }
         <div className="info">
            {(heading === 0 && Object.keys(section).length === 0) ? 
              <>
                <h1 className={"main-title"} style={{color: colorSwitch}}>Saahil Khemnani</h1>
                <h2 className={"subtitle"} style={{color: colorSwitch}}> App Developer. Product Analyst. Tech enthusiast.</h2>
              </>
              :
              <>
                {titles.map(x => {
                  if(x.id === heading){
                    return <h1 key={x.id} style={{color: colorSwitch}} className={section.title == x.title ? 'section-title' : "title"}>{x.title}</h1>
                  }
                })} 
                {(Object.keys(section).length != 0) && <About darkEnabled={darkEnabled}/>} 
              </>
            }
            <div className={(Object.keys(section).length === 0) ? "social-container" : 'social-container-bottom'}>
              {titles.map(x => {
                return (
                   <div className="social-links" key={x.id}>
                    {[2,3,4,5].indexOf(x.id) != -1 ? 
                    <>
                     <a
                      onMouseEnter={() => {if(Object.keys(section).length === 0){setHeading(x.id)}}}
                      onMouseLeave={() => {if(Object.keys(section).length === 0){setHeading(0)}}}
                      className="social-link"
                      style={{color: colorSwitch}}
                      href={x.link}
                    >{x.icon}</a> 
                    <a className="social-text" style={{color: colorSwitch}} href={x.link} >{x.title}</a>                   
                    </>
                    :
                    <>
                     <h3
                      onMouseEnter={() => {if(Object.keys(section).length === 0){setHeading(x.id)}}}
                      onMouseLeave={() => {if(Object.keys(section).length === 0){setHeading(0)}}}
                      className="social-link"
                      style={{color: colorSwitch}}
                      onClick={() => {setSection(x)}}
                    >{x.icon}</h3> 
                    <h3 className="social-text" style={{color: colorSwitch}} onClick={() => {setSection(x)}}>{x.title}</h3>
                    </>
                   }
                  </div>
                )
              })}
           </div>
           {(Object.keys(section).length != 0) && <div className="switch-container-bottom"> <Switch {...switchProps}/> </div> }
          </div>
          {(Object.keys(section).length == 0) && <div className="switch-container"> <Switch {...switchProps}/> </div> }

    </AnimatePresence>
  );
};

export default Info;
