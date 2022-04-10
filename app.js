const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=d6686c95d4b2e1f854427346ddc27e2c&query=37.8267,-122.4233";

const geocodingUrl =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FpbWlrYW4iLCJhIjoiY2wxdDd4cTdmMDRheTNqcW9ieHNjejBxbSJ9.zX2zCqy5PiLLtNKwLiwe_A";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.current.weather_descriptions[0]} it is currently ${response.body.current.temperature} degrees but feels like ${response.body.current.feelslike} degrees`
  );
});

request({ url: geocodingUrl, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
});
