import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

/* Component Import */
import Modal from "./Modal.js";

const ModalButton = ({ position, title }) => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			<AnimatePresence>
				{position == "up" && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 3 }}
							class="modal-button-container"
						>
							<button
								className="show-modal-button"
								onClick={
									handleClick
								}
							>
								{title}
							</button>
							<button
								className="arrow"
								onClick={
									handleClick
								}
							>
								<FaChevronDown />
							</button>
						</motion.div>
						<Modal
							position="up"
							showModal={showModal}
							close={handleClick}
						/>
					</>
				)}
				{position == "down" && (
					<>
						<Modal
							position="down"
							showModal={showModal}
							close={handleClick}
						/>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 3.5 }}
							class="modal-button-container"
						>
							<button
								className="arrow"
								onClick={
									handleClick
								}
							>
								<FaChevronUp />
							</button>
							<button
								className="show-modal-button"
								onClick={
									handleClick
								}
							>
								{title}
							</button>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default ModalButton;
