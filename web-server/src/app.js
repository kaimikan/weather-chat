const path = require("path");
const express = require("express");

const app = express();
// index.html is a default main path name so we don't need to add it
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Good weather",
    location: "Deventer",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
