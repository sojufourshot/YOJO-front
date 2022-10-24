import React, { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import '../../style/Cam.css'
import Camera from '../../components/layout/Camera'

const Cam = () => {

	const nav = useNavigate();
	const { id } = useParams()
	const title = `자세 ${id}`
	const [img, setImg] = useState('')
	
	const send = () => {

		console.log(img);//img= 지금 찍은 사진 링크
		nav(`/`);
	}
	return (
		<div className="background">
			<div className="title">{title}</div>
			<hr />
			{img === '' ? (
				<Camera id = {id} func={image => setImg(image)} />
			) : (
				<div>
					<div className="image">
						<img src={img} alt="alt" />
					</div>
					<div className="msg">전송하시겠습니까?</div>
					<div className="buttonSet">
						<Button
							onClick={() => {
								setImg('')
							}}
							sx={{ m: 0.5 }}
							className="button"
							variant="outlined"
						>
							취소
						</Button>
						<Button
							onClick={() => {
								send()
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
	)
}

export default Cam
