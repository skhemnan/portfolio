import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiAlertCircle,
  FiArchive,
  FiGithub,
  FiAtSign,
  FiLinkedin,
  FiArrowLeft,
  FiArrowRight,
  FiUserPlus,
  FiCheckCircle,
  FiBookOpen
} from "react-icons/fi";

import headshot from '../assets/headshot.png'

const About = () => {

return (
	<>
		<div class="about-container">
			<div class="about-section">
        <p class="icon"><FiUserPlus/></p>
				<p class="about-text">
					Hey everyone! I'm a full-stack web and app developer based in Jakarta, Indonesia, formerly Southern California, USA. 
					I have 2 years of experience with React.js and React Native. To add some function to my shiny front end I also have experience in Node.js, Express.js, and PostreSQL
					to complete the stack. To avoid any mishaps and late nights troubleshooting, I'm also proficient in Jest. 
          I'm a huge fan of lightweight and modular components with functional design in mind. I also have a pension for writing automations and workflows that make my job easier. 
				</p>
			</div>
			<div class='about-section'>
				<p class='about-text' id='about-work'>
					I'm currently a full stack software engineer at GajiGesa, a startup dedicated to bringing financial and employee wellness to 60% of Indonesia's workforce. 
					My projects include but are not limited to building Open APIs and back end infrastructure, 
					and contributing to the developing, maintenance and improvement of our React Native apps, GajiTim and GajiGesa. 
				  Prior to that, I <a class="icon"><FiCheckCircle/></a> worked as a data analyst at Bitvore, an AI fintech startup based in California, 
					where I wrote server-side code for collecting and aggegating customer data for sentiment analysis that influenced our machine learning model.
				</p>
			</div>
			<div class='about-section'>
        <p class="icon"><FiBookOpen/></p>
				<p class='about-text'>
					I consider myself a self-taught expert in consumer electronics, a self-proclaimed movie critic, and extremely addicted to YouTube. 
					When I'm not coding, I'm either watching movies/TV Shows, spending time with friends and family, or staying up late to watch 
					tech conferences from different time zones. I'm always looking to work with a collaborative team who puts learning and growth first!
          I'd love to chat! Feel free to browse my socials or send me an email any time!
				</p>
        <h2 class="next-section">about my work <FiArrowRight/></h2>
			</div>
		</div>
	</>
)
}

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
    {id: 1, name: 'about', title: 'about me.', link: '', icon: <FiAlertCircle/>, content: <About/>},
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
