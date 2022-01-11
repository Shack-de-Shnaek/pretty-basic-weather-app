/// <reference types="svelte" />

interface parsedWeatherData {
    weather: {
        main: string;
        description: string;
        icon: string;
    };
    temperature: {
        temp: number;
        realfeel: number;
    };
    pressure: number;
    humidity: number;
    visibility: number;
    wind: {
        speed: number;
        deg: number;
    };
}