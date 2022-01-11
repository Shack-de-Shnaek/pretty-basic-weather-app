"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const getWeatherData_1 = require("../controllers/getWeatherData");
const router = express.Router();
router.get('/all', getWeatherData_1.default.all);
router.get('/forecast', getWeatherData_1.default.forecast);
router.get('/test', getWeatherData_1.default.test);
exports.default = router;
