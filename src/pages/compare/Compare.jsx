import React, { useEffect, useState, Component } from "react";
import { useLocation, useNavigate ,Link } from 'react-router-dom'


import "../../style/Compare.css";





const Compare = () => {

	const { state } = useLocation();
	const parent_img = state.parent_src;
	const child =state.item;
	console.log(parent_img)
	const nav = useNavigate();

	const refine = (time)=>{
		const [a,b] = time.split("T")
		const [year, month, day] = a.split("-")
		const [hour, minute, second] = b.split(":")
		return `${year}-${month}-${day} ${hour}:${minute}`
	}

	
	

	
	return (
		<div className="compare_background">
			<div className="compare_main">

				<div className="compare_x" onClick={() => nav(-1)}/>

					<div className="compare_title">
						
					</div>

					{/* <div className="compare_date">
						날짜: {child.time}
					</div> */}

					<div className="compare_part1">

						<div className="img_div">
							<img className="compare_img" src={parent_img}></img>
						</div>

						<div className="img_div">
							<img className="compare_img" src={child.src}></img>
						</div>
					</div>

					<div className="compare_date">
						Upload: {refine(child.time)}
					</div>

					<div className="compare_part2">
						<div>Score: {Math.floor(child.score * 100) / 100} 점</div>
					</div>
			</div>
		</div>
		
		
	);
};

export default Compare;
