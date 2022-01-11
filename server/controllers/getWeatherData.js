"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const weather_1 = require("../model/weather");
const getWeatherData = {
    all: (req, res) => {
        let queryCity = (req.query.city) ? req.query.city : null;
        let queryCountry = (req.query.country) ? req.query.country : null;
        (async () => {
            let response = await (0, weather_1.default)(queryCity, queryCountry, false);
            res.send(response);
        })();
    },
    forecast: (req, res) => {
        let queryCity = (req.query.city) ? req.query.city : null;
        let queryCountry = (req.query.country) ? req.query.country : null;
        (async () => {
            let response = await (0, weather_1.default)(queryCity, queryCountry, true);
            res.send(response);
        })();
    },
    test: (req, res) => {
        res.send({
            "weather": {
                "main": "Shit",
                "description": "Pretty shit weather mate",
                "icon": "01d"
            },
            "temperature": {
                "temp": 420,
                "realfeel": 69
            },
            "pressure": 1000,
            "humidity": 87,
            "visibility": 10000,
            "wind": {
                "speed": 3,
                "deg": 60
            }
        });
    }
};
exports.default = getWeatherData;
