import React, { useEffect, useState, Component } from "react";

import "../../style/Result.css";
import axios from "axios";
import  ResultBox from "./ResultBox";





const Result = () => {



	const [items, setItems] = useState([]);

	useEffect(() => {
		axios.get("/data/upload.json").then((data) => {
			setItems(data.data.result);
		});
	}, [setItems]);


	return (
		<div>
			<div className="result_content_background">
				<div className="result_content">

					{items.map((item) => {
						return <ResultBox key={`${item.id}`} item={item} />;
					})}

					
				</div>
			</div>
		</div>
	);
};

export default Result;
