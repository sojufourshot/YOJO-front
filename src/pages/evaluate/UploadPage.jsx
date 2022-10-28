import React from "react";
import { useEffect, useState } from "react";
import "../../style/uploadpage.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const UploadPage = () => {
	const [image, setImage] = useState({
		image_file: "",
		preview_URL: "../../assets/images/soju.jpeg",
	});

	const msg = {
		register: "사진을 등록해주세요",
	};

	let inputRef;

	const saveImage = (e) => {
		e.preventDefault();
		if (e.target.files[0]) {
			// 새로운 이미지를 올리면 createObjectURL()을 통해 생성한 기존 URL을 폐기
			URL.revokeObjectURL(image.preview_URL);
			const preview_URL = URL.createObjectURL(e.target.files[0]);
			setImage(() => ({
				image_file: e.target.files[0],
				preview_URL: preview_URL,
			}));
		}
	};

	const deleteImage = () => {
		// createObjectURL()을 통해 생성한 기존 URL을 폐기
		URL.revokeObjectURL(image.preview_URL);
		setImage({
			image_file: "",
			preview_URL: "img/default_image.png",
		});
	};

	useEffect(() => {
		// 컴포넌트가 언마운트되면 createObjectURL()을 통해 생성한 기존 URL을 폐기
		return () => {
			URL.revokeObjectURL(image.preview_URL);
		};
	}, []);

	const sendImageToServer = async () => {
		if (image.image_file) {
			const formData = new FormData();
			formData.append("image", image.image_file);
			formData.append("poseType", "cobra");
			formData.append("poseName", "cobra");
			console.log(formData); // FormData {}
			for (const keyValue of formData) console.log(keyValue); // ["img", File] File은 객체
			await axios.post("http://localhost:5500/api/v1/images", formData);
			alert("서버에 등록이 완료되었습니다!");
			setImage({
				image_file: "",
				preview_URL: "img/default_image.png",
			});
		} else {
			alert("사진을 등록하세요!");
		}
	};

	return (
		<div className="uploader-wrapper">
			<span className="title">{msg.register}</span>
			<input
				type="file"
				accept="image/*"
				onChange={saveImage}
				// 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
				// 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
				onClick={(e) => (e.target.value = null)}
				ref={(refParam) => (inputRef = refParam)}
				style={{ display: "none" }}
			/>
			<div className="img-wrapper">
				<img src={image.preview_URL} />
			</div>
			<div className="upload-button">
				<Button type="primary" variant="contained" onClick={() => inputRef.click()}>
					Preview
				</Button>
				<Button color="error" variant="contained" onClick={deleteImage}>
					Delete
				</Button>
				<Button color="success" variant="contained" onClick={sendImageToServer}>
					Upload
				</Button>
			</div>
		</div>
	);
};

export default UploadPage;
