const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// node app.js Deventer
const location = process.argv[2];

if (location) {
  console.log(`${location} Forecast: `);

  geocode(location, (error, geocodeData) => {
    // the return stop the rest of the function
    if (error) return console.log("Error: ", error);

    //console.log("Data: ", geocodeData);
    forecast(
      geocodeData.latitude,
      geocodeData.longitude,
      (error, forecastData) => {
        if (error) return console.log("Error", error);

        console.log(
          `${forecastData.description}, Temp: ${forecastData.temperature}, Feels like: ${forecastData.feelslike}`
        );
      }
    );
  });
} else {
  console.log("Provide location to get a forecast.");
}
