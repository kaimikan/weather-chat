console.log("Client side javascript file is loaded.");

const weatherForm = document.querySelector("#location-search-form");
const locationInput = document.querySelector("#location-input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = locationInput.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = data.error;
      } else {
        console.log(data.location);
        messageOne.textContent = data.location;
        console.log(data.forecast);
        messageTwo.textContent = `${data.forecast.description} - Temp: ${data.forecast.temperature}°C, Feels Like: ${data.forecast.feelslike}°C`;
      }
    });
  });
});
