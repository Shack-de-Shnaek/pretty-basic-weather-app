# pretty-basic-weather-app
A basic weather app that used svelte as a front-end and express as a back-end.

It uses the free tier of openweathermap's forecast api.
If you want to use the code, you'll need to get yourself an api key (preferably of the same tier). Make a file called "apikey.json" with the contents:
{
    "apiKey": "<insert api key here>"
}

where you would put your own api key.

By default, the server will host a compiled version of the svelte app, but you can host the svelte app separately on port 8080. To do that, you'll have to add a cors header 
with whatever ip you want and port 8080 in index.js in the server folder, and change the query address queryWeatherData.ts in the client/services folder to contain the ip address
of the express server, rather than it just being /api/forecasts?whatever.
