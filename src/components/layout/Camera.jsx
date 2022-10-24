import React, { useEffect, useRef, useState, useCallback } from 'react'
import Webcam from 'react-webcam'
import Slider from '@mui/material/Slider'
import Button from '@mui/material/Button'
import './Camera.css'

const videoConstraints = {
	// resolution
	width: 1280,
	height: 720,
	facingMode: 'user',
}

function Camera({ style, func }) {
	const canvas = useRef(null)
	const [ctx, setCtx] = useState(undefined)
	const [ratio, setRatio] = useState(0.1)
	const [second, setSecond] = useState(-1)
	const [img, setImg] = useState(undefined)
	const [flag, setFlag] = useState(false)
	const [cap, setCap] = useState(false)
	const webcamRef = useRef(null)
	// div size
	const width = 640
	const height = 360

	const capture = useCallback(() => {
		const imgSrc = webcamRef.current.getScreenshot()
		setImg(imgSrc)
	}, [webcamRef])

	useEffect(() => {
		setCtx(canvas.current.getContext('2d'))
	}, [])

	useEffect(() => {
		const data = [
			[0.7669271388820778, 0.13430099259122655],
			[0.779948024285771, 0.11369824694503596],
			[0.7539063344298752, 0.11369824694503596],
			[0.7018229547180836, 0.10339685811082945],
			[0.6888021502658811, 0.10339685811082945],
			[0.6757813458136787, 0.22701342805464023],
			[0.5976562762459912, 0.20641068240844962],
			[0.7539063344298752, 0.3815341324788481],
			[0.4283854136099046, 0.330027220330038],
			[0.8841147027578635, 0.4845479567764682],
			[0.4153646091577022, 0.47424659996448415],
			[0.5455729774856904, 0.4845479567764682],
			[0.5976562762459912, 0.4845479567764682],
			[0.4153646091577022, 0.7111783189956767],
			[0.779948024285771, 0.6802741845152797],
			[0.11588541866937282, 0.7111783189956767],
			[0.8320313230460719, 0.9481100380268694],
			[0.636718811029835, 0.21671205523154494],
		]
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
		]

		if (ctx !== undefined) {
			ctx.clearRect(0, 0, width, height)
			ctx.strokeStyle = "red"
			ctx.lineWidth = 3
			for (let i = 0; i < seq.length; i++) {
				const start = seq[i][0],
					end = seq[i][1]
				const sx = (data[start][0] * (1 - 2 * ratio) + ratio) * width,
					sy = (data[start][1] * (1 - 2 * ratio) + ratio) * height
				const ex = (data[end][0] * (1 - 2 * ratio) + ratio) * width,
					ey = (data[end][1] * (1 - 2 * ratio) + ratio) * height

				ctx.beginPath()
				ctx.moveTo(sx, sy)
				ctx.lineTo(ex, ey)
				ctx.stroke()
			}
		}
	}, [ctx, ratio])

	useEffect(() => {
		if (second === -1) return
		const countdown = setInterval(() => {
			if (second > 0) {
				setSecond(second - 1)
			} else if (second === 0) {
				capture()
				setCap(true)
				setTimeout(() => {
					setCap(false)
				}, 100)
				clearInterval(countdown)
				setFlag(false)
			}
		}, 1000)
		return () => clearInterval(countdown)
	}, [second])

	useEffect(() => {
		if (img !== undefined) {
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
				func(img)
			}, 500)
		}
	}, [img])

	return (
		<div>
			<div className="container">
				<img style={{ margin: 10 }} src="http://yojo.riroan.com/images/orig/2.jpg" alt="alt" width={(width * 2) / 3} height={(height * 2) / 3} />
				<div style={{ display: 'flex', position: 'relative' }}>
					<canvas className={cap ? 'captured' : 'uncaptured'} ref={canvas} width={width} height={height} />
					<Webcam
						mirrored
						ref={webcamRef}
						style={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }}
						audio={false}
						height={height}
						screenshotFormat="image/jpeg"
						width={width}
						videoConstraints={videoConstraints}
					/>
				</div>
				<Slider
					style={{ width: width, margin: '20px' }}
					defaultValue={ratio}
					onChange={(e, value) => {
						setRatio(value)
					}}
					step={0.02}
					min={0.0}
					max={0.2}
				/>
				<Button
					className="button"
                    disabled={second!==-1}
					style={{ display: 'block', width: width, marginTop: 10, marginBottom: 10 }}
					onClick={() => {
						setSecond(2)
						setFlag(true)
					}}
					variant="contained"
				>
					Capture
				</Button>
				{flag && <div className="second">{second}</div>}
			</div>
		</div>
	)
}

export default Camera
