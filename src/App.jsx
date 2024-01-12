import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Topbar />
				<Routes>
					{/* ...  <Route path="/" element={<Home />} />
					<Route path="/current-conditions" element={<CurrentConditions />} />
					<Route path="/forecast" element={<Forecast />} />
					<Route path="*" element={<NotFound />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
