import React from "react";
import { Link } from "react-router-dom";
import "../../style/ResultBox.css";

	const ResultBox = ({ item }) => {
		const { id, author, score, time,src } = item;

		
		
			
		return (
			
				
			<div className="R_item">
				
					<div className="R_item_box">
						<img className="R_item_box_img" src={src} />
						<div className="R_item_text"> 시간: {time} </div>
						<div className="R_item_text"> 점수: {score} </div>
					</div>
				
			</div>
				
			
		);
	};

export default ResultBox;
