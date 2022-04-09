// to run node app.js or nodemon app.js (nodemon is installed as a global package) for live sever
const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// run with a command and argument example: node app.js add --title="Sample Title" --body="Sample Body"

// change yargs version
yargs.version("1.1.0");

// add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: false,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(
      `Adding a new note: \nTitle: ${argv.title}\nBody: ${argv.body}`
    );
  },
});

// remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: () => {
    console.log("Removing a note");
  },
});

// list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler: () => {
    console.log("Listing notes");
  },
});

// read command
yargs.command({
  command: "read",
  describe: "Read note",
  handler: () => {
    console.log(`Reading a note`);
  },
});

// parses all arguments from above, they wouldn't work without this
yargs.parse();
