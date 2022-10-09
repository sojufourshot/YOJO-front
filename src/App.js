import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/layout/HomePage";
import PATH from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

	return (
		<div>
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
