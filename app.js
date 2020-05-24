const validator = require('validator')
const chalk = require('chalk')
const getNotes = require('./notes')

notes = getNotes()

console.log(notes)

console.log(validator.isEmail('uday@gmail.com'))
console.log(validator.isURL('https://google.com'))

console.log(chalk.bold.green.inverse('Success'))