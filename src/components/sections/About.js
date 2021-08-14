import React from 'react'
import {
  FiArrowRight,
  FiUserPlus,
  FiCheckCircle,
  FiBookOpen
} from 'react-icons/fi'

const About = ({handleClick}) => {
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
        <h2 class="next-section" onClick={handleClick}>about my work <FiArrowRight/></h2>
			</div>
		</div>
	</>
)


}

export default About