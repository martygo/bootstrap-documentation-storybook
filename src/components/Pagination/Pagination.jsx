import React from "react";
import { PropTypes } from "prop-types";

export const Pagination = ({ active, size, disabled }) => {
	const paginationClasses = ["pagination", `pagination-${size}`];

	return (
		<>
			<nav>
				<ul className={paginationClasses.join(" ").trim()}>
					<li className={`page-item ${disabled ? "disabled" : ""}`}>
						<button className="page-link">Previous</button>
					</li>
					<li className={`page-item ${active ? "active" : ""}`}>
						<button className="page-link">1</button>
					</li>
					<li className="page-item">
						<button className="page-link">2</button>
					</li>
					<li className="page-item">
						<button className="page-link">3</button>
					</li>
					<li className="page-item">
						<button className="page-link">Next</button>
					</li>
				</ul>
			</nav>
		</>
	);
};

Pagination.propTypes = {
	active: PropTypes.bool,
	size: PropTypes.oneOf(["lg", "sm"]),
	disabled: PropTypes.bool,
};

Pagination.defaultProps = {
	active: false,
	size: "lg",
	disabled: false,
};
