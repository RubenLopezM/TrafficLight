import React, { useState } from "react";

import TrafficLight from "./TrafficLight.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	const [color, SetColor] = useState({
		stoplight: "",
		slowlight: "",
		golight: ""
	});
	return (
		<div className="lights">
			<TrafficLight
				key="stop"
				color={color.stoplight}
				click={() => {
					SetColor({ stoplight: "red", slowlight: "", golight: "" });
				}}></TrafficLight>

			<TrafficLight
				key="slow"
				color={color.slowlight}
				click={() => {
					SetColor({
						stoplight: "",
						slowlight: "yellow",
						golight: ""
					});
				}}></TrafficLight>
			<TrafficLight
				key="go"
				color={color.golight}
				click={() => {
					SetColor({
						stoplight: "",
						slowlight: "",
						golight: "green"
					});
				}}></TrafficLight>
		</div>
	);
};

export default Home;
