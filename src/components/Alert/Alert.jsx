import React from "react";
import { PropTypes } from "prop-types";

import Icon from "../Icon/Icon";

const Alert = ({ type, message, icon }) => {
	let hello = "hello";
	return (
		<>
			<div className={`alert alert-${type}`}>
				<Icon name={hello ? icon : ""} />
				{message}
			</div>
		</>
	);
};

Alert.propTypes = {
	type: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

export default Alert;
