const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your notes.....'
}


const removeNote = (title) => {
    const notes = loadNotes()
    const data = notes.filter((note) => note.title != title)
    saveNotes(data)
    if (data.length != notes.length)
        console.log(chalk.inverse.green('Note Removed successfully!!'))
    else
        console.log(chalk.inverse.red('No note found'))

}

const read = (title) => {

    const notes = loadNotes()
    const note = notes.find((note) => note.title == title)

    if (note) {
        console.log(chalk.italic.bold('Title: ', note.title))
        console.log(chalk.bold.italic("Body: ", note.body))
    } else
        console.log(chalk.red.inverse("Note not found"))

}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title == title)
    const duplicateNote = notes.find((note) => note.title == title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.inverse.green('New Note added'))
    } else {
        console.log(chalk.inverse.red('Note title taken'))
    }

}

const listNotes = (notes) => {
    const data = loadNotes()
    console.log(chalk.inverse.green("YOUR NOTES"))
    data.forEach((note) => console.log("Title: %s Body: %s ", note.title, note.body))
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        const data = JSON.parse(dataJSON)
        return data
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    read: read
}