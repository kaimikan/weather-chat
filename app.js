const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// node app.js Deventer
const location = process.argv[2];

if (location) {
  console.log(`${location} Forecast: `);

  geocode(location, (error, { latitude, longitude, location } = {}) => {
    // the return stop the rest of the function
    if (error) return console.log("Error: ", error);

    forecast(
      latitude,
      longitude,
      (error, { description, temperature, feelslike } = {}) => {
        if (error) return console.log("Error", error);

        console.log(
          `${location} - ${description}, Temp: ${temperature}, Feels like: ${feelslike}`
        );
      }
    );
  });
} else {
  console.log("Provide location to get a forecast.");
}
