const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=d6686c95d4b2e1f854427346ddc27e2c&query=40,-75`;

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Error: ", error);
});

request.end();
