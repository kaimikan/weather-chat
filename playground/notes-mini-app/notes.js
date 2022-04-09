const fs = require("fs");
const chalk = require("chalk");
const fileName = "notes.json";

// ADDING NOTE
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  // to trigger: node inspect app.js add --title="Title" --body="Body"
  // to test type ws://127... link in browser and open inspector debugger
  //debugger;

  if (!duplicateNote /* duplicateNote === undefined */) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse.bold("New note added!"));
  } else {
    console.log(chalk.red.inverse.bold("Note title taken!"));
  }
};

// REMOVING NOTE
const removeNote = (title) => {
  const notes = loadNotes();
  // tried using a hasBeenRemoved boolean to check
  // we can access it in notes.filter with this.hasBeenRemoved but
  // the change does not transfer out of the scope so hasBeenRemoved remains unchanged - good lesson
  const remainingNotes = notes.filter(
    (
      note // if return is false note is removed from array, if true it stays
    ) => note.title !== title
  );

  if (remainingNotes.length != notes.length) {
    saveNotes(remainingNotes);
    console.log(chalk.green.inverse.bold("Note removed"));
  } else {
    console.log(chalk.red.inverse.bold(`No note with the title ${title}`));
  }
};

// LIST NOTES
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.white.inverse.bold("Your Notes"));
  notes.map((note) =>
    console.log(chalk.grey.inverse.italic(`- ${note.title}`))
  );
};

// READ NOTE
const readNote = (title) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note.title === title);

  if (duplicateNote /* duplicateNote !== undefined */) {
    console.log(chalk.green.inverse.bold(title));
    console.log(duplicateNote.body);
  } else {
    console.log(chalk.red.inverse.bold("No note with matching title found!"));
  }
};

// UTILITY
const saveNotes = (notes) => {
  dataJSON = JSON.stringify(notes);
  fs.writeFileSync(fileName, dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(fileName);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  // if name is the same we do not need to do name: name
  addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
