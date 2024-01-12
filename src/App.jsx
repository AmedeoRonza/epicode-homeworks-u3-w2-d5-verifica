import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import WeatherComponent from "./components/WeatherComponent";
import Home from "./components/Home";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Topbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/current-conditions" element={<WeatherComponent />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
