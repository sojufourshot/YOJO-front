import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const { default: Header } = require("./Header");

const Layout = (props) => {
	/* Props */
	const { className } = props;

	return (
		<div className={className}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
