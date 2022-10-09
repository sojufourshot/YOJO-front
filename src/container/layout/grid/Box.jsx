import React from "react";
import "./Box.css";

	const Box = ({ item }) => {
		const { id, title, author, content, src } = item;

		return (
			
				
			<div className="item">
				<div className="item_box">
					<img className="item_box_img" src={src} />
				</div>
			</div>
				
			
		);
	};

export default Box;
