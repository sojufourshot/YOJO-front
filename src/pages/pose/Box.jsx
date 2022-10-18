import React from "react";
import { Link } from "react-router-dom";
import "../../style/Box.css";

	const Box = ({ item }) => {
		const { id, title, author, content, src } = item;

		
		
			
		return (
			
				
			<div className="item">
				<Link to={`/evaluate/info/${id}`} state={{item}}>
					<div className="item_box">
						<img className="item_box_img" src={src} />
					</div>
				</Link>
			</div>
				
			
		);
	};

export default Box;
