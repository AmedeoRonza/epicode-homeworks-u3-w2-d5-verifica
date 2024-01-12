import React, { useState, useEffect } from "react";import "../Styles/Previsioni.css"; // Importa il file CSS

const TomorrowForecastComponent = () => {
	const [forecastData, setForecastData] = useState(null);
	const apiKey = "905772e1bc822c5c3e20673062b6af9b";
	const city = "Vittoria";
	const lang = "it";
	const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${lang}&appid=${apiKey}`;

	const getDayOfWeek = (dayIndex) => {
		const daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];
		return daysOfWeek[dayIndex];
	};

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

	const currentDate = new Date();
	const tomorrowDate = new Date(currentDate);
	tomorrowDate.setDate(currentDate.getDate() + 1);

	const tomorrowDayOfWeek = getDayOfWeek(tomorrowDate.getDay());

	const tomorrowForecastItem = forecastData.list.find((item) => {
		const itemDate = new Date(item.dt_txt);
		return itemDate.getDate() === tomorrowDate.getDate();
	});

	if (!tomorrowForecastItem) {
		return <div>Nessuna previsione disponibile per il giorno successivo.</div>;
	}

	const temperaturaInCelsius = tomorrowForecastItem.main.temp - 273.15;
	const velocitaVentoInKmH = tomorrowForecastItem.wind.speed * 3.6;

	return (
		<div className="forecast-container">
			<h2 className="forecast-title">Previsione meteo per il giorno successivo a {city}</h2>
			<div className="forecast-info">
				<div className="forecast-item">
					<p>Data: {tomorrowDayOfWeek}</p>
					<p>Temperatura: {temperaturaInCelsius.toFixed(2)} °C</p>
					<p>Condizioni Meteorologiche: {tomorrowForecastItem.weather[0].description}</p>
					<p>Velocità del Vento: {velocitaVentoInKmH.toFixed(2)} km/h</p>
					<p>Nuvolosità: {tomorrowForecastItem.clouds.all}%</p>
				</div>
			</div>
		</div>
	);
};

export default TomorrowForecastComponent;
