const validator = require('validator')
const chalk = require('chalk')
const notes = require('./notes')
const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//create add command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',

        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'remove a note',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }
})

//create list command 
yargs.command({
    command: 'list',
    describe: 'list your notes',
    handler: function() {
        console.log("listing out all notes")
    }

})

//create read command 
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function() {
        console.log('Reading a note')
    }
})

yargs.parse()