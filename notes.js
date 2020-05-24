const fs = require('fs')

const getNotes = function() {
    return 'Your notes.....'
}

const addNote = function(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note) {

        return note.title == title

    })
    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log('New Note added')
    } else {
        console.log('Note title taken')
    }

}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function() {
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
    addNote: addNote
}