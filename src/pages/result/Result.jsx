import React, { useEffect, useState, Component } from "react";
import { useLocation } from 'react-router-dom'

import "../../style/Result.css";
import axios from "axios";
import  ResultBox from "./ResultBox";





const Result = () => {

	const { state } = useLocation();
	
	const pose_Info={
        id:state.id,
        title:state.title,
        author:state.author,
        content:state.content,
        src:state.src
    }



	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get("/data/upload.json").then((data) => {
			setItems(data.data.result);
		});
	}, [setItems]);


	return (
		<div>
			<div className="result_content_background">

				<div className="result_title">
						{pose_Info.title}
				</div>
				
				<div className="result_content">
					{items.map((item) => {
						return <ResultBox key={`${item.id}`} item={item} parent_id={pose_Info.id} parent_src={pose_Info.src} />;
					})}

					
				</div>
			</div>
		</div>
	);
};

export default Result;
