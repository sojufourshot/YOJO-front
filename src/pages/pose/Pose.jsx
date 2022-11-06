import React, { useEffect, useState, Component } from "react";
import "../../style/Pose.css";

import axios from "axios";
import  Box from "./Box";



const Pose = () => {



	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get("/data/images.json").then((data) => {
			setItems(data.data.position);
		});
	}, [setItems]);


	return (
		
			<div className="main_content_background">
				<div className="main_content">

					{items.map((item) => {
						return <Box key={`${item.id}`} item={item} />;
					})}

					
				</div>
			</div>
		
	);
};

export default Pose;
