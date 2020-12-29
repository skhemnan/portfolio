import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Section = ({ title, description }) => {
				return (
								<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} class="section">
					<h3 className="section-title">{title}</h3>
					<p className="section-text">{description == 'about' ?
													"I'm a full-stack web developer based in Jakarta, Indonesia, formerly Southern California, USA. I work mostly with Node.js, PostgreSQL, and React.js. I'm a huge fan of lightweight and modular code with functional design in mind, and I have a pension for writing scripts that make my life easier. I also consider myself a self-taught expert in consumer electronics, a self-proclaimed movie critic, and extremely addicted to youtube. When I'm not coding, I'm either watching movies/TV Shows, spending time with friends and family, or staying up late to watch tech conferences from different time zones." :
					description == 'experience' ? "I currently work at a fintech startup dedicated to bring financial planning and education to blue collar employees. My projects include but are not limited to building Open APIs and back end infrastructure, in addition to contributing to the maintenance and improvement our mobile app. Before that, I worked as a data analyst at an AI fintech startup based in California, where I wrote server-side code for collecting and aggegating product data for sentiment analysis that influenced our machine learning model." :
					"description"
					}</p>												
					</motion.div>
				)
}

export default Section
