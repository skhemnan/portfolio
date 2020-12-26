import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

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
			</div>
		</div>}
	</>);
};

export default Modal;
