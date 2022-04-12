setTimeout(() => {
  console.log("2 secs are up");
}, 2000);

const names = ["jeff", "steve", "gord"];
const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };

    //return data;
    callback(data);
  }, 2000);
};

geocode("Deventer", (dataReturn) => {
  console.log(dataReturn);
});

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (x, y, callback) => {
  setTimeout(() => {
    callback(x + y);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
