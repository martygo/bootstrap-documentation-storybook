import React from "react";
import { PropTypes } from "prop-types";

export const Button = ({ type, content, size, borderColor, disabled }) => {
	const finalClass = `btn btn-${
		type == "outline" ? `outline-${borderColor}` : type
	} btn-${size}`;

	return (
		<>
			<button
				type="button"
				className={finalClass}
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
		"link",
		"outline",
	]),
	borderColor: PropTypes.oneOf([
		"primary",
		"success",
		"danger",
		"warning",
		"dark",
	]),
	content: PropTypes.string.isRequired,
	size: PropTypes.oneOf(["sm", "lg"]),
	disabled: PropTypes.bool,
};
