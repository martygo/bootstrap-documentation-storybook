import React from "react";

export const Modal = ({ ...props }) => {
	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
				onClick={props.onClick}
			>
				Launch modal
			</button>
			<div className="modal fade" tabIndex="-1" id="exampleModal">
				<div className="modal-dialog">
					<div className="modal-content">{props.children}</div>
				</div>
			</div>
		</>
	);
};
