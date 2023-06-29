/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import hello from '../../assets/hello.png'


const About = ({darkEnabled}) => {

let colorSwitch = darkEnabled ? 'white' : 'black'
let colorSwitchPara = {
	unfaded: darkEnabled ? '#d9d9d9' : '#79776c',
	faded: darkEnabled ? '#79776c' : '#d9d9d9'
}
const [fade, setFade] = React.useState(false)

const links = {
	gajigesa: 'https://techcrunch.com/2021/02/03/gajigesa-a-fintech-startup-serving-underbanked-indonesian-workers-raises-2-5-million-seed-round/',
	bitvore: 'http://www.bitvore.com',
	filtable: 'https://github.com/skhemnan/filtable',
	visitr: 'http://skhemnan.github.io/visitr'
}

const Skill = ({header, children, link}) => {
	return <>
					<a 
					style={{fontSize: (header && fade) ? 30 : null, textDecorationLine: link || header ? 'underline' : 'none', color: colorSwitch}}
					class="skill"
					href={link ? link : null}
					>{children}</a>
				</>
  }

return (
	<>
		<div class="about-icon">
			{!fade && <p class="hover-over bounce-2" style={{color: colorSwitch}}>{`${['Hover over me!']}`}</p> }
			<a
					onMouseEnter={() => {setFade(true)}}
					onMouseLeave={() => {setFade(false)}}	
					style={{cursor: 'pointer'}}
			>
				<img src={hello} style={{width: 'auto', height: 150}}/> 
			</a>
		</div>
		<AnimatePresence>
				<div class="about-container">
					<div class="about-section">
						<p class="about-text" style={{ color: fade ? colorSwitchPara.faded : colorSwitchPara.unfaded,}}>
							Hello friend! Welcome to my digital resume! I’m a full-stack developer and product analyst based in sunny Los Angeles, California. 
							I’ve spent a wonderful 5 years as a software engineer and had the privilege of working with numerous <Skill header>Technologies</Skill> such as <Skill>React.js,</Skill> 
							<Skill>React Native,</Skill> <Skill>Express.js,</Skill>, <Skill>Typescript,</Skill> <Skill>GraphQL,</Skill> <Skill>Node.js</Skill> and <Skill>PostgreSQL</Skill>. 
							As an early startup hire and product analyst, I’ve also spent extensive time with a number of <Skill header>Tools</Skill>, mainly{' '} 
							<Skill>Android Studio,</Skill> <Skill>Xcode, </Skill> <Skill>Amplitude, </Skill> <Skill>Figma, </Skill> <Skill>Hubspot</Skill> and <Skill>Sentry</Skill>. 
							I’m all about serverless so I’ve worked with <Skill>Firebase,</Skill> and <Skill>Google Cloud,</Skill>. 
							Maintaining all issue tickets and documentation also could not have been easier without <Skill>Jira,</Skill> and <Skill>Confluence,</Skill>. 
							To avoid late night troubleshooting, I also write tests using <Skill>Jest,</Skill>. 
							I am a huge fan of lightweight, mobile-first applications and modular components. 
							I prefer a functional and purposeful design. I also enjoy writing automations and workflows that make my job easier with <Skill>Bash,</Skill> and <Skill>Git,</Skill>. 
							I thrive with user feedback, which I often monitor with <Skill>Amplitude,</Skill> and <Skill>Sentry</Skill>.
						</p>
					</div>
					<div class='about-section'>
						<p class='about-text' style={{ color: fade ? colorSwitchPara.faded : colorSwitchPara.unfaded,}}>
							In my <Skill header>Experience</Skill>, I’ve spent time as a full stack engineer, product analyst, and data analyst for a wide number of startups. As the <Skill>second engineering hire</Skill> at <Skill link={links.gajigesa}>GajiGesa</Skill> I helped develop the organization’s 
							flagship android applications and their employer app backend API. As interim product analyst, I scoped and designed the company’s point rewards system, overseeing it from development to deployment. 
							While at GajiGesa, I also worked part time as an <Skill>iOS Developer</Skill> at a <Skill>startup in the pet industry</Skill> utilizing AI/ML to improve dog park retention and community building. 
							The application consisted of a video feed, live location feature, and profile customization. Prior to being an engineer, I served as a <Skill>Data Analyst</Skill> in sales operations for <Skill link={links.bitvore}>Bitvore</Skill>, 
							an AI fintech startup focused on automated news and data surveillance for financial institutions. At Bitvore, I led sales operations and maintained the CRM for a repository of more than 50 clients. 
							Every tool and skill earned from this experience allowed me to shape my eventual career goals in <Skill>mobile application development</Skill> and <Skill>product management</Skill>.
						</p>
					</div>
					<div class='about-section'>
						<p class='about-text' style={{ color: fade ? colorSwitchPara.faded : colorSwitchPara.unfaded,}}>
							I attribute a great amount of my acquired skills to my personal <Skill header>Projects</Skill> that stemmed from product ideas or as solutions to my everyday problems. 
							I scoped, designed and built <Skill>OneFitness</Skill> (pending app store approval), the ultimate fitness iOS app that provides personalized strength training programs centered around periodization with effortless progress tracking.
							Additionally, <Skill link={links.filtable}>Filtable</Skill> is a simple REST API to CSV converter I had built for my operations team at Bitvore to 
							streamline the acceptance testing of the AI Sentiment algorithm. To combat decision fatigue when packing for a trip, I also developed <Skill link={links.visitr}>Visitr</Skill> to quickly find out 
							what I should pack in my suitcase based on my destination’s weather. I'm always looking for a challenging and collaborative team that values a team member who asks questions 
							about the bigger picture When I'm not coding, you can find me watching Marvel movies, eating a Chipotle burrito, or 
							staying up late at night watching tech conferences from around the world. I'd love to chat! Browse my socials by clicking the links below or send me an email anytime!

						</p>
					</div>
				</div>
		</AnimatePresence>
	</>
)


}

export default About