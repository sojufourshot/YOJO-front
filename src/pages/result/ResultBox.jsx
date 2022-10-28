import React from "react";
import { Link } from "react-router-dom";
import "../../style/ResultBox.css";

	const ResultBox = ({ item,parent_id,parent_src}) => {
		const { id, author, score, time,src } = item;
		
		

		
		
			
		return (
			
			
			<Link to={`/evaluate/info/${parent_id}/result/${id}`} state={{item: item, parent_src:parent_src}}>	
				<div className="R_item">
					
						<div className="R_item_box">
							<img className="R_item_box_img" src={src} />
							<div className="R_item_text"> 시간: {time} </div>
							<p></p>
							<div className="R_item_text"> 점수: {score} </div>
						</div>
					
				</div>
			</Link>
				
			
		);
	};

export default ResultBox;
