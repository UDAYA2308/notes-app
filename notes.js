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

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title == title)
    if (duplicateNotes.length == 0) {
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
    removeNote: removeNote
}