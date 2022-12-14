import React, { useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material";
import "./Camera.css";

const theme = createTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: "#000000",
		},
		secondary: {
			// This is green.A700 as hex.
			main: "#11cb5f",
		},
	},
});

const videoConstraints = {
	// resolution
	width: 1280,
	height: 720,
	facingMode: "user",
};

function Camera({ func, id }) {
	const seq = [
		[0, 17],
		[17, 6],
		[17, 5],
		[6, 8],
		[8, 10],
		[5, 7],
		[7, 9],
		[17, 12],
		[12, 14],
		[14, 16],
		[17, 11],
		[11, 13],
		[13, 15],
	];
	const canvas = useRef(null);
	const [ctx, setCtx] = useState(null);
	const [ratio, setRatio] = useState(0.7);
	const [second, setSecond] = useState(-1);
	const [img, setImg] = useState(null);
	const [flag, setFlag] = useState(false);
	const [cap, setCap] = useState(false);
	const [data, setData] = useState([]);
	const webcamRef = useRef(null);
	const [w, setW] = useState(1);
	const [h, setH] = useState(1);
	// div size
	const width = 640;
	const height = 360;

	const capture = useCallback(() => {
		const imgSrc = webcamRef.current.getScreenshot();
		setImg(imgSrc);
	}, [webcamRef]);

	useEffect(() => {

		console.log('id', id)
		setCtx(canvas.current.getContext('2d'))
		fetch(`https://yojo.riroan.com/api/v1/cam/${id}`, {
			method: 'GET',
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((res) => {
				const pos = res.keypoints;
				setW(res.width);
				setH(res.height);
				// w = res.width
				// h = res.height

				let r = 1;
				if (res.width > res.height) r = res.height / res.width;
				else r = res.width / res.height;
				for (var i = 0; i < pos.length; i++) {
					pos[i][0] *= r;
				}
				setData(pos);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		if (ctx !== null && data !== []) {
			ctx.clearRect(0, 0, width, height);
			ctx.strokeStyle = "red";
			ctx.lineWidth = 3;
			const cw = w * ratio;
			const ch = h * ratio;
			const offsetX = (width - cw) / 2;
			const offsetY = (height - ch) / 2;
			for (let i = 0; i < seq.length; i++) {
				const start = seq[i][0],
					end = seq[i][1];
				const sx = data[start][0] * ratio * width + offsetX,
					sy = data[start][1] * ratio * height + offsetY;
				const ex = data[end][0] * ratio * width + offsetX,
					ey = data[end][1] * ratio * height + offsetY;
				ctx.beginPath();
				ctx.moveTo(sx, sy);
				ctx.lineTo(ex, ey);
				ctx.stroke();
			}
		}
	}, [data, ratio]);

	useEffect(() => {
		if (second === -1) return;
		const countdown = setInterval(() => {
			if (second > 0) {
				setSecond(second - 1);
			} else if (second === 0) {
				capture();
				setCap(true);
				setTimeout(() => {
					setCap(false);
				}, 100);
				clearInterval(countdown);
				setFlag(false);
			}
		}, 1000);
		return () => clearInterval(countdown);
	}, [second]);

	useEffect(() => {
		if (img !== null) {
			// fetch('http://localhost:8000', {
			// 	method: 'POST',
			// 	headers: {
			// 		Accept: 'application/json',
			// 		'Content-Type': 'application/json',
			// 	},
			// 	body: JSON.stringify({
			// 		data: img,
			// 	}),
			// })
			// 	.then(res => res.json())
			// 	.catch(err => {
			// 		console.log(err)
			// 	})
			setTimeout(() => {
				func(img);
				console.log(img);
			}, 500);
		}
	}, [img]);

	return (
		<div>
			<div className="container">
				<img style={{ margin: 20, height: 360, width: 640 }} src={`http://yojo.riroan.com/images/orig/${id}.jpg`} alt="alt" width={(width * 2) / 3} height={(height * 2) / 3} />
				<div style={{ display: "flex", position: "relative" }}>
					<canvas className={cap ? "captured" : "uncaptured"} ref={canvas} width={width} height={height} />
					<Webcam mirrored ref={webcamRef} style={{ position: "absolute", left: 0, top: 0, zIndex: -1 }} audio={false} height={height} screenshotFormat="image/jpeg" width={width} videoConstraints={videoConstraints} />
				</div>

				<Slider
					style={{ width: width, margin: "20px" }}
					value={ratio}
					defaultValue={ratio}
					onChange={(e, value) => {
						setRatio(value);
					}}
					step={0.02}
					min={0.5}
					max={0.9}
				/>
				{/* <ThemeProvider> */}
					<Button
						className="button"
						color="primary"
						theme={theme}
						disabled={second !== -1}
						style={{ display: "block", width: width, marginTop: 10, marginBottom: 10 }}
						onClick={() => {
							setSecond(5);
							setFlag(true);
						}}
						variant="contained"
					>
						?????? ??????
					</Button>
				{/* </ThemeProvider> */}
				{flag && <div className="second">{second}</div>}
			</div>
		</div>
	);
}

export default Camera;
