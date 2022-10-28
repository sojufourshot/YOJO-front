import React, { useEffect, useState, Component } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../../style/Info.css";

const Info = () => {
	const location = useLocation();
	const state = location.state;

	const pose_Info = {
		id: state.item.id,
		title: state.item.title,
		author: state.item.author,
		content: state.item.content,
		src: state.item.src,
	};

	const nav = useNavigate();

	const nav_cam = () => {
		nav(`/cam/${pose_Info.id}`);
	};

	const nav_result = () => {
		nav(`/evaluate/info/${pose_Info.id}/result`, { state: pose_Info });
	};

	const nav_upload = () => {
		nav(`/evaluate/upload`);
	};

	return (
		<div className="info_background">
			<section className="info_section1">
				<div className="info_title">{pose_Info.title}</div>

				<div className="section1_part1">
					<img className="info_img" src={pose_Info.src} />
				</div>

				<div className="section1_part2">
					<div className="info_author"> 작성자: {pose_Info.author} </div>
					<div className="info_content"> {pose_Info.content}</div>
				</div>
			</section>

			<section className="info_section2">
				<button className="btn" onClick={nav_cam}>
					촬영하기
				</button>
				<button className="btn" onClick={nav_upload}>
					이미지 업로드
				</button>
				<button className="btn" onClick={nav_result}>
					결과확인
				</button>

				<button className="btn" onClick={() => nav(-1)}>
					취소
				</button>
			</section>
		</div>
	);
};

export default Info;
