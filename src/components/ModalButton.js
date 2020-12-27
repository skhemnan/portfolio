import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

/* Component Import */
import Modal from "./Modal.js";

const ModalButton = ({ position, title }) => {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<>
			{position == "up" && (
				<>
				<div class="modal-button-container">
					<button className="show-modal-button" onClick={handleClick}>{title}</button>
			    <button className="arrow" onClick={handleClick}><FaChevronDown/></button>
				</div>
				<Modal position='up' showModal={showModal} close={handleClick}/>
				</>
			)}
			{position == "down" && (
				<>
			  <Modal position='down' showModal={showModal} close={handleClick}/>
				<div class="modal-button-container">
			    <button className="arrow" onClick={handleClick}><FaChevronUp/></button>
					<button className="show-modal-button" onClick={handleClick}>{title}</button>
				</div>
				</>
			)}
		</>
	);
};

export default ModalButton;
