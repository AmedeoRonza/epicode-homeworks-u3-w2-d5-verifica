import React from "react";
import { FaSun } from "react-icons/fa";
import "../Styles/Home.css"; // Importa il file CSS per lo stile

const MeteoVittoria = () => {
	return (
		<div className="meteo-container">
			<h1>Benvenuti su Meteo Vittoria</h1>
			<div className="cloud">
				<FaSun size={60} color="#ffcc00" />
			</div>
			<p>Visualizza il meteo attuale di Vittoria, Sicilia</p>
		</div>
	);
};

export default MeteoVittoria;
