// to run node app.js or nodemon app.js (nodemon is installed as a global package) for live sever
// notice difference in syntax between npm packages and local files
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

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
    notes.addNote(argv.title, argv.body);
  },
});

// remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.removeNote(argv.title);
  },
});

// list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler: () => {
    notes.listNotes();
  },
});

// read command
yargs.command({
  command: "read",
  describe: "Read note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readNote(argv.title);
  },
});

// parses all arguments from above, they wouldn't work without this
yargs.parse();
