import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

/* Component Import */
import Section from './Section'
import Skills from './Skills'
import Projects from './Projects'
import Other from './Other'

const Modal = ({ position, showModal, close }) => {
	return (<>
		{showModal &&
		<div className="modal-container">
		  <div className={position == 'down' ? 'bottom-modal-wrapper' : 'top-modal-wrapper'}>
							<div className={position == 'down' ? 'bottom-close': 'top-close'}>
					 <button class='close-button' onClick={close}>{
							position == 'down' ? <FaChevronDown/> : <FaChevronUp/>
						}</button>
				</div>
						<div className="section-container">
							{position == 'up' && 
								<>
								<Section title="About me" description="about"/>
								<Section title="My Experience" description="experience"/>
								<Skills />
							  </>
							}
							{position == 'down' &&
								<>
								<Projects />
								<Other />
								</>
							}
						</div>

			</div>
		</div>}
	</>);
};

export default Modal;
