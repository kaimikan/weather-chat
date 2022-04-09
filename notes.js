const fs = require("fs");
const chalk = require("chalk");
const fileName = "notes.json";

const getNotes = function () {
  return "notes...";
};

// ADDING NOTE
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => {
    // if return is false note is removed from array, if true it stays
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
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
  const remainingNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (remainingNotes.length != notes.length) {
    saveNotes(remainingNotes);
    console.log(chalk.green.inverse.bold("Note removed"));
  } else {
    console.log(chalk.red.inverse.bold(`No note with the title ${title}`));
  }
};

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
  getNotes: getNotes,
  // if name is the same we do not need to do name: name
  addNote,
  removeNote: removeNote,
};
