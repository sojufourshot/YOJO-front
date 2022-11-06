import React, { useState } from "react";
import { useLocation,useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import "../../style/Cam.css";
import Camera from "../../components/layout/Camera";
import axios from "axios";

const Cam = () => {

	const { state } = useLocation();

	const pose_Info={
        id:state.id,
        title:state.title,
        author:state.author,
        content:state.content,
        src:state.src
    }
	const nav = useNavigate();
	const { id } = useParams();
	const title = `자세 ${id}`;
	const [img, setImg] = useState("");
	const send = () => {
		console.log(img); //img= 지금 찍은 사진 링크
		nav(`/`);
	};

	const onSubmit = async () => {
		const file = DataURIToBlob(img);
		const formData = new FormData();
		formData.append("image", file);
		formData.append("poseType", "orig");
		formData.append("poseName", pose_Info.title);
		console.log(formData);
		for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
		await axios
			.post("https://yojo.riroan.com/api/v1/images", formData, { withCredentials: true })
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
		alert("서버에 등록이 완료되었습니다!");
	};

	function DataURIToBlob(dataURI) {
		const splitDataURI = dataURI.split(",");
		const byteString = splitDataURI[0].indexOf("base64") >= 0 ? atob(splitDataURI[1]) : decodeURI(splitDataURI[1]);
		const mimeString = splitDataURI[0].split(":")[1].split(";")[0];

		const ia = new Uint8Array(byteString.length);
		for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);

		return new Blob([ia], { type: mimeString });
	}
	return (
		<div className="background">
			{/* <div>{pose_Info.title}</div> */}
			<div className="title">{pose_Info.title}</div>
			<hr />
			{img === "" ? (
				<Camera id={pose_Info.id} func={(image) => setImg(image)} />
			) : (
				<div>
					<div className="image">
						<img src={img} alt="alt" />
					</div>
					<div className="msg">전송하시겠습니까?</div>
					<div className="buttonSet">
						<Button
							onClick={() => {
								setImg("");
							}}
							sx={{ m: 0.5 }}
							className="button"
							variant="outlined"
						>
							취소
						</Button>
						<Button
							onClick={() => {
								onSubmit();
							}}
							sx={{ m: 0.5 }}
							className="button"
							variant="contained"
						>
							전송
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cam;
