import React from "react";
import "./Footer.css";

const Footer = () => {
	const footerValue = {
		operTime: "※ 운영시간 : 평일 10:00 ~ 17:00 (점심시간 12:30 ~ 13:30 제외 / 주말 및 공휴일 제외)",
		termsOfService: "이용약관",
		privateInfo: "개인정보처리방침",
	};

	const corpValue = {
		name: "상호명",
		address: "사업장소재지",
		ceo: "대표",
		businessNumber: "사업자등록번호",
		phone: "전화번호",
	};

	const companyInfo = {
		name: "YOJO",
		address: "서울특별시 광진구 능동로 120",
		ceo: "김재우",
		businessNumber: "02-3486-3456",
		phone: "010-1234-5678",
	};

	return (
		<footer>
			<div className="footer-container">
				<div className="footer-cs-section-container">
					<div className="footer-btn-box">
						<a className="black-sm-btn">
							FAQ
							<span>
								<svg width="30" height="32" viewBox="0 0 57 59" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M35.625 29.5L35.9846 29.1526L36.3202 29.5L35.9846 29.8474L35.625 29.5ZM21.7346 14.4026L35.9846 29.1526L35.2654 29.8474L21.0154 15.0974L21.7346 14.4026ZM35.9846 29.8474L21.7346 44.5974L21.0154 43.9026L35.2654 29.1526L35.9846 29.8474Z" fill="white" />
								</svg>
							</span>
						</a>
						<a className="black-sm-btn">
							1:1문의
							<span>
								<svg width="30" height="32" viewBox="0 0 57 59" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M35.625 29.5L35.9846 29.1526L36.3202 29.5L35.9846 29.8474L35.625 29.5ZM21.7346 14.4026L35.9846 29.1526L35.2654 29.8474L21.0154 15.0974L21.7346 14.4026ZM35.9846 29.8474L21.7346 44.5974L21.0154 43.9026L35.2654 29.1526L35.9846 29.8474Z" fill="white" />
								</svg>
							</span>
						</a>
					</div>
					{/* <div className="footer-value-text">{footerValue.operTime}</div> */}
				</div>
				<div className="footer-info-container">
					<div className="footer-documentation-box">
						<div className="footer-value-text-m">{footerValue.privateInfo}</div>
						<div className="footer-value-text-sm">{footerValue.termsOfService}</div>
					</div>
					<div className="footer-info-corp-box">
						<dl>
							<dt>{corpValue.name}</dt>
							<dd>{companyInfo.name}</dd>
						</dl>
						<dl>
							<dt>{corpValue.address}</dt>
							<dd>{companyInfo.address}</dd>
						</dl>
						<dl>
							<dt>{corpValue.businessNumber}</dt>
							<dd>{companyInfo.businessNumber}</dd>
						</dl>
						<dl>
							<dt>{corpValue.phone}</dt>
							<dd>{companyInfo.phone}</dd>
						</dl>
						<dl>
							<dt>{corpValue.ceo}</dt>
							<dd>{companyInfo.ceo}</dd>
						</dl>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
