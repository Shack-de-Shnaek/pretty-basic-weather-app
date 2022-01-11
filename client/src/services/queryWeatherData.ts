import { weatherStore } from "../localStore";

const queryWeatherData = async (queryCity: string, queryCountry?: string) => {
    console.log('querying weather api...')
    try {
        let query = `api/weather/forecast?city=${queryCity}${(queryCountry) ? '&country=' + queryCountry : ''}`;
        console.log(query);
        let response = await fetch(query);
        let data: parsedWeatherData = await response.json();
        console.log(data);
        weatherStore.set(data);
        return data;
    }
    catch {
        console.log('Could not fetch weather data');
        return 'could not fetch weather data';
    }
}

export default queryWeatherData;