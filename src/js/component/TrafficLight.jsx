import React, { useState } from "react";
import PropTypes from "prop-types";

const TrafficLight = props => {
	return (
		<div
			className={`bulb ${props.color}`}
			onClick={() => {
				props.click(props.color);
			}}></div>
	);
};

TrafficLight.propTypes = {
	color: PropTypes.string,
	click: PropTypes.func
};

export default TrafficLight;
