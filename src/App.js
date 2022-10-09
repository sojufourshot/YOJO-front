import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Item } from "./pages/grid/Items";
import axios from "axios";
import Layout from "./components/layout/Layout";
import HomePage from "./components/layout/HomePage";
import PATH from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	// const [items, setItems] = useState([]);

	// useEffect(() => {
	// 	axios.get("data/images.json").then((data) => {
	// 		setItems(data.data.position);
	// 	});
	// }, [setItems]);
	return (
		<div>
			{/* {items.map((item) => {
				return <Item key={`key-${item.id}`} item={item} />;
			})} */}
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/*" element={<HomePage />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
