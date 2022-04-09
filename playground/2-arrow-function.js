const square = function (x) {
  return x * x;
};

const squareArrow = (x) => {
  return x * x;
};

// if we only have 1 statement
const squareArrowSingleStatement = (x) => x * x;

const event = {
  name: "Birthday Party",
  guestList: ["Kai"],
  // printGuestList: function () {
  //   console.log(`Guest list for ${this.name}`);
  // },
  // just replacing function with () => does not work
  printGuestListArrow() {
    console.log(`Guest list for ${this.name}`);

    // arrow functions do not bind their own this value unlike normal ones
    // poor canditates for methods but greats ones for pretty much everything else
    this.guestList.forEach((guest) => {
      console.log(guest + "is attending " + this.name);
    });
  },
};

// ADVANTAGES:
/* 
- shorter to write
- 
 */
