"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const data = require('../apikey.json');
const apikey = data.apiKey;
const queryWeather = async (queryCity, queryCountry, parse) => {
    let query = `http://api.openweathermap.org/data/2.5/weather?q=${queryCity}${(queryCountry) ? ',' + queryCountry : ''}&appid=${apikey}`;
    console.log(`query received ${query}`);
    let data;
    try {
        data = await axios_1.default.get(query);
        data = data.data;
    }
    catch {
        return 'failed to query weather data';
    }
    if (parse) {
        let parsedData = {
            weather: {
                main: data.weather[0].main,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            },
            temperature: {
                temp: Math.round(data.main.temp),
                realfeel: Math.round(data.main.feels_like)
            },
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            visibility: data.visibility,
            wind: data.wind
        };
        return parsedData;
    }
    else {
        return data;
    }
    ;
};
exports.default = queryWeather;
