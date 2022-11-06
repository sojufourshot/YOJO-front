import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../style/ResultBox.css";

	const ResultBox = ({ item,parent_id,parent_src}) => {
		const { id, author, score, time,src } = item;
		const [hover, setHover] = useState(0);
		
		
		const refine = (time)=>{
			const [a,b] = time.split("T")
			const [year, month, day] = a.split("-")
			const [hour, minute, second] = b.split(":")
			return `${year}-${month}-${day} ${hour}:${minute}`
		}

		
		
			
		return (
			
			
			<Link to={`/evaluate/info/${parent_id}/result/${id}`}  style={{ textDecoration: 'none' }} state={{item: item, parent_src:parent_src}}>	
				<div className="R_item" onMouseEnter={()=>{setHover(1)}} onMouseLeave={()=>{setHover(0)}}>
					
					{hover ? (
						<div className="R_item_box_hover">
							<img className="R_item_box_img_hover" src={src} />
							<div className="R_item_text_hover"> Date: {refine(time)}<br></br>Score: {Math.floor(score * 100) / 100} </div>
						</div>

					) :
					(
						<div className="R_item_box">
							<img className="R_item_box_img" src={src} />
						</div>

						
					)}
					
					
				</div>
			</Link>
				
			
		);
	};

export default ResultBox;
