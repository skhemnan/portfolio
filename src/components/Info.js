import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin, FaHammer, FaHeart, FaReact } from 'react-icons/fa'

const Info = () => {
	const [showEmail, setShowEmail] = useState(false);
	const [showGithub, setShowGithub] = useState(false);
	const [showLinkedin, setShowLinkedin] = useState(false);

	return (
		<>
			<AnimatePresence>
				<div>
					<motion.div
						initial={{
							opacity: 0,
							height: 0
						}}
						animate={{
							opacity: 1,
							height: 200
						}}
						transition={{
							duration: 1,
							type: "spring",
							delay: 0.5
						}}
						class="info"
					>
						<motion.h1
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.5,
								delay: 1
							}}
							class="title"
						>{
              showEmail ? 'send me an email.' :
							showGithub ? 'browse my github.' :
							showLinkedin ? 'visit my linkedin.' :
							"Hello, I'm Saahil."
						 }
						</motion.h1>
						<motion.h2
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.5,
								delay: 1.5
							}}
							className="subtitle"
						>
							Full stack software
							engineer • Product
							analyst • Tech
							enthusiast
						</motion.h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 2.5 }}
						className="social-container"
					>
						<div className="social-links">
							<a
							onMouseEnter={() => setShowEmail(true)}
							onMouseLeave={() => setShowEmail(false)}
							className="social-link"
							href="mailto:saahil.khemlani@gmail.com"
						>
							<FaEnvelope/>
						</a>
						<a
							onMouseEnter={() => setShowGithub(true)}
							onMouseLeave={() => setShowGithub(false)}
							className="social-link"
							href="http://www.github.com/skhemnan"
						>
						  <FaGithub/>
						</a>
						<a
							onMouseEnter={() => setShowLinkedin(true)}
							onMouseLeave={() => setShowLinkedin(false)}
							className="social-link"
							href="http://www.github.com/in/hellosaahil"
						>
						  <FaLinkedin/>
						</a>
						</div>
					</motion.div>
				</div>
			</AnimatePresence>
		</>
	);
};

export default Info;
