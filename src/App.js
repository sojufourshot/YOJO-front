import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./components/layout/HomePage";
import PATH from "./constants/Path";
import "bootstrap/dist/css/bootstrap.min.css";
import Pose from "./pages/pose/Pose";
import Info from "./pages/infomation/Info";
import Cam from "./pages/cam/Cam";
import Result from "./pages/result/Result";
import UploadPage from "./pages/evaluate/UploadPage";
import About from "./pages/about/About";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="/*" element={<HomePage />} />
						<Route path="/about" element={<About />} />
						<Route path="/evaluate" element={<Pose />} />
						<Route path="/evaluate/info/:id" element={<Info />} />
						<Route path="/cam/:id" element={<Cam />} />
						<Route path="/evaluate/info/:id/result" element={<Result />} />
						<Route path="/evaluate/1" element={<Pose />} />
						<Route path="/evaluate/upload" element={<UploadPage></UploadPage>} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
