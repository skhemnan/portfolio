import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ModalButton = ({ arrow, title }) => {
	return (
		<div class="button-container">
			{arrow == "up" && (
				<div>
					<button class="arrow">
						<FaChevronUp />
					</button>
				</div>
			)}
			<button className="show-modal-button">{title}</button>
			{arrow == "down" && (
				<div>
					<button class="arrow">
						<FaChevronDown />
					</button>
				</div>
			)}
		</div>
	);
};

export default ModalButton;
