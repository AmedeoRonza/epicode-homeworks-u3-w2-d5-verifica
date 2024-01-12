import React, { useState, useEffect } from "react";
import "../Styles/AltrePrevisioni.css";

const WeatherSearchComponent = () => {
	const [location, setLocation] = useState("");
	const [weatherData, setWeatherData] = useState(null);
	const [forecastData, setForecastData] = useState(null);

	const apiKey = "905772e1bc822c5c3e20673062b6af9b";
	const lang = "it";

	const handleSearch = async () => {
		try {
			const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=${lang}&appid=${apiKey}`;
			const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&lang=${lang}&appid=${apiKey}`;

			const weatherResponse = await fetch(weatherUrl);
			const weatherData = await weatherResponse.json();
			setWeatherData(weatherData);

			const forecastResponse = await fetch(forecastUrl);
			const forecastData = await forecastResponse.json();
			setForecastData(forecastData);
		} catch (error) {
			console.error("Errore nel recupero dei dati meteorologici:", error);
		}
	};

	return (
		<div className="weather-search-container">
			<input type="text" placeholder="Inserisci la località..." value={location} onChange={(e) => setLocation(e.target.value)} />
			<button onClick={handleSearch}>Cerca</button>

			{/* Condizioni Meteo */}
			{weatherData && (
				<div>
					<h2>Condizioni Meteo attuali a {location}</h2>
					<p>Temperatura: {(weatherData.main.temp - 273.15).toFixed(2)} °C</p>
					<p>Condizioni Meteo: {weatherData.weather[0].description}</p>
					<p>Velocità del Vento: {(weatherData.wind.speed * 3.6).toFixed(2)} km/h</p>
					<p>Nuvolosità: {weatherData.clouds.all}%</p>
				</div>
			)}

			{/* Previsioni del Giorno Successivo */}
			{forecastData && forecastData.list && forecastData.list.length > 0 && (
				<div>
					<h2>Previsioni Meteo per domani a {location}</h2>
					<div className="forecast-card">
						<p>Temperatura: {(forecastData.list[0].main.temp - 273.15).toFixed(2)} °C</p>
						<p>Condizioni Meteo: {forecastData.list[0].weather[0].description}</p>
						<p>Velocità del Vento: {(forecastData.list[0].wind.speed * 3.6).toFixed(2)} km/h</p>
						<p>Nuvolosità: {forecastData.list[0].clouds.all}%</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default WeatherSearchComponent;
