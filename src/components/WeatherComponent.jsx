import React, { useState, useEffect } from "react";
const WeatherComponent = () => {
	const [weatherData, setWeatherData] = useState(null);
	const apiKey = "905772e1bc822c5c3e20673062b6af9b";
	const city = "Vittoria";
	const lang = "it"; // Imposta la lingua italiana
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=${apiKey}`;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(apiUrl);
				const data = await response.json();
				setWeatherData(data);
			} catch (error) {
				console.error("Errore nel recupero dei dati meteorologici:", error);
			}
		};

		fetchData();
	}, [apiUrl]);

	if (!weatherData) {
		return <div>Caricamento...</div>;
	}

	const { main, weather, wind, clouds } = weatherData;

	// Conversione della temperatura da Kelvin a Celsius
	const temperaturaInCelsius = main.temp - 273.15;

	// Conversione della velocità del vento da metri al secondo a chilometri all'ora
	const velocitaVentoInKmH = wind.speed * 3.6;

	return (
		<div>
			<h2>Meteo a {city}</h2>
			<p>Temperatura: {temperaturaInCelsius.toFixed(2)} °C</p>
			<p>Condizioni Meteorologiche: {weather[0].description}</p>
			<p>Velocità del Vento: {velocitaVentoInKmH.toFixed(2)} km/h</p>
			<p>Nuvolosità: {clouds.all}%</p>
		</div>
	);
};

export default WeatherComponent;
