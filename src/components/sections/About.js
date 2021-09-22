/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {
  FiArchive,
  FiUserPlus,
  FiCheckCircle,
} from 'react-icons/fi'
import { AnimatePresence, motion } from "framer-motion";


import hello from '../../assets/hello.png'


const About = () => {

const [fade, setFade] = React.useState(false)

const Skill = ({text, style, header}) => {
	return <>
					<a 
					style={{fontSize: (header && fade) ? 30 : null, textDecorationLine: 'underline'}}
					class="skill"
					onMouseEnter={() => {setFade(true)}}
					onMouseLeave={() => {setFade(false)}}
					>{text}</a>
	</>
}

return (
	<>
		<div class="about-icon">
			{!fade && 
				<p class="hover-over bounce-2">{`${['Hover over "Experience"!']}`}</p>
			}
			<img src={hello} style={{width: 'auto', height: 100}}/> 
		</div>
		<AnimatePresence>
				<div class="about-container">
					<div class="about-section">
						<p class="about-text" style={{color: fade ? '#d9d9d9' : '#79776c'}}>
						{/* <p class="icon"><FiUserPlus/></p> */}
							Hello friend! I'm a full-stack web and app developer based in Jakarta, Indonesia, formerly Southern California, USA. 
							I have 2 years of <Skill header text='Experience'/> with <a class="skill">React.js,</a> and <a class="skill">React Native,</a> (with <a class="skill">Redux,</a> <a class="skill">Redux-thunk,</a> and <a class="skill">React Context/Hooks</a>) To add some function to my shiny front end I also have experience in <a class="skill">Node.js,</a> <a class="skill">Express.js,</a> and <a class="skill">PostgreSQL,</a> 
							{' '}to complete the stack. I'm all about serverless, having worked with <a class="skill">Firebase,</a> and <a class="skill">Google Cloud.</a> To avoid any mishaps and late nights troubleshooting, I'm also proficient in <a class="skill">Jest,</a> and <a class="skill">Appium,</a>. 
							I'm a huge fan of lightweight and modular components with functional design in mind. I also enjoy writing automations and workflows with <a class="skill">Bash and Git</a> that make my job easier. I love working in a collaborative environment and believe in complete transparency and visbility in the workplace. 
						</p>
					</div>
					<div class='about-section'>
						<p class='about-text' style={{color: fade ? '#d9d9d9' : '#79776c'}}>
							For <Skill header text='Work'/>, I'm currently a <a class="skill">software engineer at</a>  <a class="skill" href={'https://techcrunch.com/2021/02/03/gajigesa-a-fintech-startup-serving-underbanked-indonesian-workers-raises-2-5-million-seed-round/'}>GajiGesa</a>, a startup dedicated to bringing <a class="skill">financial and employee wellness</a> to 60% of Indonesia's workforce.
							{/* <div style={{width: '100%', height: '70%', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
								<img src={'https://techcrunch.com/wp-content/uploads/2021/02/GajiGesa_Team_Photos_New.jpeg?w=1390&crop=1'} style={{maxWidth: '95%', height: 'auto',}}/> 
							</div> */}
							{' '}My tasks include but are not limited to building employer back end infrastructure for clients, 
							and contributing to the development, maintenance and improvement of our React Native apps, <a class="skill" href={'https://play.google.com/store/apps/details?id=com.gajitimnative'}>GajiTim</a> and <a class="skill" href={'https://play.google.com/store/apps/details?id=com.gajigesanative'}>GajiGesa</a>. 
							Prior to that, I worked at <a class="skill" href={'http://www.bitvore.com'}>Bitvore</a>, 
							{/* <a class="icon" id="check"><FiCheckCircle/></a>  */}
							{' '}an <a class="skill">AI Fintech Startup</a> based in California, dedicated to providing business insight from unstructured data among various news sources.
							I worked as a <a class="skill">data analyst</a> where I wrote server-side Javascript for collecting and analyzing customer data for sentiment analysis that influenced our machine learning model. This in turn increased productivity and efficiency of the sales and product team.
						</p>
					</div>
					<div class='about-section' style={{color: fade ? '#d9d9d9' : '#79776c'}}>
						<p class='about-text'>
							I attribute my acquired skillset to my curiosity to my <Skill header text='Projects'/> and my need to solve everyday problems. <a class="skill" href={'http://google.com'}>Filtable</a> <a class="skill" href={'https://github.com/skhemnan/filtable'}>(Repo)</a>, 
							a simple REST API to CSV converter,{' '} 
							{/* <p class="icon"><FiArchive/></p> */}
							fulfilled a particular need for gathering valuable customer data. I sought to solve problems in my personal life as well. I built <a class="skill" href={'https://github.com/skhemnan/tmdb_scraper'}>TMDb Scraper</a>
							{' '}to find and rank the top 10 movies that I've seen in my life, and I built <a class="skill" href={'http://skhemnan.github.io/visitr'}>Visitr</a> <a class="skill" href={"https://github.com/skhemnan/visitr"}>(Repo)</a> to quickly find out what I should pack in my suitcase based on my destination's weather. I'm always looking 
							for a challenge and collaborative team that puts learning and growth first. When I'm not coding, you can find me watching Marvel movies, eating a Chipotle burrito, or staying up late at night watching tech conferences from around the world. I'd love to chat! Browse my socials by clicking the links below or send me an email anytime!
							<div style={{width: '100%', height: 'auto', padding: 10, alignItems: 'center', justifyContent: 'center'}}>
								{/* <img src={ironman} style={{maxWidth: '95%', height: 'auto', maxHeight: 'center'}}/>  */}
							</div>
						</p>
					</div>
				</div>
		</AnimatePresence>
	</>
)


}

export default About