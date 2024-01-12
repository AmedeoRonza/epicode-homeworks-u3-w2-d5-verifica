import React, { useState, useEffect } from "react";import "../Styles/Previsioni.css"; // Importa il file CSS

const ForecastComponent = () => {
	const [forecastData, setForecastData] = useState(null);
	const apiKey = "905772e1bc822c5c3e20673062b6af9b";
	const city = "Vittoria";
	const lang = "it";
	const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&appid=${apiKey}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();
				setForecastData(data);
			} catch (error) {
				console.error("Errore nel recupero dei dati delle previsioni meteo:", error);
			}
		};

		fetchData();
	}, [apiUrl]);

	if (!forecastData) {
		return <div className="loading">Caricamento...</div>;
	}

	// Logica per estrarre e visualizzare le informazioni di previsione necessarie
	// ...

	return (
		<div className="forecast-container">
			<h2 className="forecast-title">Previsioni meteo per {city}</h2>
			<div className="forecast-info">
				{/* Renderizza le informazioni di previsione */}
				{/* Esempio: <p>Data: {forecastData.list[0].dt_txt}</p> */}
			</div>
		</div>
	);
};

export default ForecastComponent;
