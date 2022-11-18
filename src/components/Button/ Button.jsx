import React from "react";
import { PropTypes } from "prop-types";

export const Button = ({ type, content, size, disabled }) => {
	return (
		<>
			<button
				type="button"
				className={`btn btn-${type} btn-${size}`}
				disabled={disabled ? true : false}
			>
				{content}
			</button>
		</>
	);
};

Button.propTypes = {
	type: PropTypes.oneOf([
		"primary",
		"success",
		"danger",
		"warning",
		"dark",
		"link"
	]),
	content: PropTypes.string.isRequired,
	size: PropTypes.oneOf(["sm", "lg"]),
	disabled: PropTypes.bool,
};
