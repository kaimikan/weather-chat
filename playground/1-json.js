const fs = require("fs");
const fileName = "1-json.json";

const person = {
  name: "Kai",
  planet: "Earth",
  age: 22,
};
//loadBaseData(person)

// buffer - a way for node to represent binary data
const dataBuffer = fs.readFileSync(fileName);
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.name);

// update data
person.name = "Kaloyan";
loadBaseData(person);

function loadBaseData(data) {
  // null represents a function, 2 is identation space
  const dataJSON = JSON.stringify(data, null, 2);
  console.log(dataJSON);
  fs.writeFileSync(fileName, dataJSON);
}
