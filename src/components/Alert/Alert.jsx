import React from "react";
import { PropTypes } from "prop-types";

import Icon from "../Icon/Icon";

export const Alert = ({ type, message, icon }) => {
	return (
		<>
			<div className={`alert alert-${type}`}>
				<Icon name={icon ? icon : ""} />
				{message}
			</div>
		</>
	);
};

Alert.propTypes = {
	type: PropTypes.oneOf([
		"primary",
		"success",
		"danger",
		"warning",
		"dark",
	]),
	message: PropTypes.string.isRequired,
	icon: PropTypes.string,
};
