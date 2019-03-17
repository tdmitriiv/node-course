const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
  return 'Your notes'
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const isHasNote = notes.find(note => note.title === title)
  let msg = ''
  if (!isHasNote) {
    notes.push({ title, body })
    saveNotes(notes)
    msg = chalk.bgGreen.bold('Note added')
  } else {
    msg = chalk.bgRed.bold('Note already exist')
  }
  console.log(msg)
}

const removeNote = (title) => {
  const notes = loadNotes()
  const filteredNote = notes.find(note => note.title === title)
  let msg = ''
  if (!filteredNote ) {
    saveNotes(filteredNotes)
    msg = chalk.bgGreen.bold('Note removed')
  } else {
    msg = chalk.bgRed.bold('No found note')
  }
  console.log(msg)
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.bgBlue.bold('Your notes:'))
  notes.forEach(note =>
  {
    console.log(`-${note.title}`)
  })
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

const readNote = (title) => {
  const notes = loadNotes()
  const findedNote = notes.find(note => note.title === title)
  if (findedNote) {
    console.log(`${chalk.bgGreen.bold(findedNote.title)} ${findedNote.body}`)
  } else {
    console.log(chalk.bgRed.bold('Note not found'))
  }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
}