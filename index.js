//base

const request = require("request");

const API_KEY = "38f9264b8e345e5059d64b5e08c19663";
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&units=metric&q=";

function getWeatherData(city, callback) {
    const url = BASE_URL + city;
    request(url, function (error, response, body) {
        if (error) {
            callback(error, null);
        } else {
            const weatherData = JSON.parse(body);
            callback(null, weatherData);
        }
    });
}

getWeatherData("Sousse", (error, data) => {
    if (error) {
        console.error("Erreur : " + error);
    } else {
        console.log("Description : " + data.weather[0].description);
        console.log("Température : " + data.main.temp + "°C");
        console.log("Humidité : " + data.main.humidity + "%");
    }
});
