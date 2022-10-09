import PATH from "../../constants/Path";
// import SearchContent from "pages/product/SearchContent";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const outside = useRef();

	const modalClose = () => {
		setModalOpen(!modalOpen);
	};

	return (
		// <div>
		// 	<div>
		// 		<div>헤더</div>
		// 	</div>
		// 	<div>
		// 		<div>
		// 			<Link to={PATH.SELLER + PATH.LOGIN}>SellerLoginPage</Link>
		// 		</div>

		// 		<div>
		// 			<Link to={PATH.SELLER + PATH.SIGNUP}>SellerSignUpPage</Link>
		// 		</div>
		// 		<div>
		// 			<Link to={PATH.PRODUCTS + "/all"}>PRODUCTS</Link>
		// 		</div>
		// 		<div>
		// 			<Link to={PATH.REVIEW}>REVIEW</Link>
		// 		</div>
		// 		<div>
		// 			<Link to={PATH.WRITEREVIEW}>WRITEREVIEW</Link>
		// 		</div>
		// 		<div>
		// 			<Link to={PATH.MYPAGE}>MYPAGE</Link>
		// 		</div>
		// 		<div>
		// 			<Link to={PATH.QNA}>QNA</Link>
		// 		</div>
		// 		<div>
		// 			<Link to={PATH.ORDER}>ORDER</Link>
		// 		</div>
		// 	</div>
		// </div>

		// 가장 큰
		<div className="header-container">
			{/* 위에 */}
			<div className="header-content">
				<div className="header-top">
					<div className="header-logo-box">
						<a className="header-logo" href="/">
							로고
						</a>
					</div>
					<div className="header-search-box">
						<button className="header-search-btn" onClick={modalClose}>
							<span className="header-search-span">검색</span>
						</button>
						{modalOpen && (
							<div
								className="modal"
								ref={outside}
								onClick={(e) => {
									if (e.target === outside.current) setModalOpen(false);
								}}
							>
								<div className="modal-body">
									<button className="cancel-btn" onClick={() => setModalOpen(false)}></button>
									{/* <SearchContent setModalOpen={setModalOpen} /> */}
								</div>
							</div>
						)}
					</div>
					<ul className="mini-menu">
						{/* <li className="mini-seller">
							<a className="mini-seller-a" href={PATH.SELLER + PATH.LOGIN}>
								<span className="mini-seller-span"></span>
								<strong className="mini-seller-strong">SELLER</strong>
							</a>
						</li> */}
						<li className="mini-mypage">
							<a className="mini-mypage-a" href={PATH.MYPAGE}>
								<span className="mini-mypage-span"></span>
								<strong className="mini-mypage-strong">MY PAGE</strong>
							</a>
						</li>
						<li className="mini-myheart">
							<a className="mini-myheart-a" href={PATH.LIKE}>
								<span className="mini-myheart-span"></span>
								<strong className="mini-myheart-strong">YOGA</strong>
							</a>
						</li>
						<li className="mini-shoppingbag">
							<a className="mini-shoppingbag-a" href="/">
								<span className="mini-shoppingbag-span"></span>
								<strong className="mini-shoppingbag-strong">YOGA</strong>
							</a>
						</li>
						{/* 로그인 로그아웃 변경되게 하기 */}
						<li className="mini-login">
							<Link to={PATH.LOGIN}>
								<button className="mini-login-btn">
									<span className="mini-login-span"></span>
									<strong className="mini-login-strong">LOGIN</strong>
								</button>
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* 중간 */}
			<div className="header-middle">
				<nav className="header-nav">
					<ul className="header-nav-bar">
						<li className="header-nav-li">
							<a className="header-nav-a">YOGA</a>
						</li>
						<li className="header-nav-li">
							<a className="header-nav-a">AI</a>
						</li>
						<li className="header-nav-li">
							<a className="header-nav-a">SERVICE</a>
						</li>
					</ul>
				</nav>
			</div>
			{/* 아래 */}
			<div className="header-bottom">
				<div className="header-subnav">
					<ul className="header-subnav-bar">
						<li className="header-subnav-li">
							<Link className="header-subnav-a" to={PATH.PRODUCTS + "/all"}>
								ABOUT
							</Link>
						</li>
						<li className="header-subnav-li">
							<Link className="header-subnav-a" to={PATH.PRODUCTS + "/1"} state={{ cname: "상의" }}>
								YOJO
							</Link>
						</li>
						<li className="header-subnav-li">
							<Link className="header-subnav-a" to={PATH.PRODUCTS + "/2"} state={{ cname: "하의" }}>
								AI CHECK
							</Link>
						</li>
						<li className="header-subnav-li">
							<Link className="header-subnav-a" to={PATH.PRODUCTS + "/5"} state={{ cname: "가방" }}>
								YOGA
							</Link>
						</li>
						<li className="header-subnav-li">
							<Link className="header-subnav-a" to={PATH.PRODUCTS + "/3"} state={{ cname: "신발" }}>
								YOGA
							</Link>
						</li>
						<li className="header-subnav-li">
							<Link className="header-subnav-a" to={PATH.PRODUCTS + "/4"} state={{ cname: "액세서리" }}>
								YOGA
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
