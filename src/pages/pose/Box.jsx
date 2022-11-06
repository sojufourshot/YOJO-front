import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../../style/Box.css";

	const Box = ({ item }) => {
		const { id, title, author, content, src } = item;
		const [hover, setHover] = useState(0);
		

		
		return (
			
			
				
			
				<Link to={`/evaluate/info/${id}`} style={{ textDecoration: 'none' }} state={{item}}>
					<div className="item" onMouseEnter={()=>{setHover(1)}} onMouseLeave={()=>{setHover(0)}}>

						{hover ? (
						<div className="item_box_hover" >
							
							<img className="item_box_img_hover" src={src} />
							<div className="item_box_text">{title}</div>
						</div>
						) : 
						(
						<div className="item_box" >
							<img className="item_box_img" src={src} />
						</div>)}

					


					</div>

				</Link>
			
				
			
		);
	};

export default Box;
