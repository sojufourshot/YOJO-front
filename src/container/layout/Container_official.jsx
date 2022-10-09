import React, { useEffect, useState, Component } from "react";
import "./Container_official.css";

import axios from "axios";



import  Box from "./grid/Box";



const Container_official = () => {



	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get("/data/images.json").then((data) => {
			setItems(data.data.position);
		});
	}, [setItems]);


	return (
		<div>
			<div className="main_content_background">
				<div className="main_content">

					{items.map((item) => {
						return <Box key={`key-${item.id}`} item={item} />;
					})}

					
				</div>
			</div>
		</div>
	);
};

export default Container_official;
