#!/usr/bin/env node

const program = require('commander')
const game = require('./game')
const chalk = require('chalk')
const dbManager = require('./dBManager.js')
const fileManager = require('./fileManager.js')
const categories = require('./categories')
 
program
    .version('1.0.0', '-v, --version')
    .option('-n, --number <number>', 'Number of questions', parseInt)
    .option('-m, --multiple', 'Launch game with four possible answers')
    .option('-d, --difficulty <difficulty>', 'Questions\' difficulty: easy, medium or hard', /^(easy|medium|hard)$/i)
    .option('-u, --username <username>', 'What\'s your username ? ')
    .option('-l, --listCategories', 'Listing all the categories and their id')
    .option('-c, --category <number>', 'Choose your category by his id, to list them enter --listCategories', parseInt)
    .option('-e, --export [user]', 'Export all scores or user\'s scores', String)
    .option('--listusers', 'List all users in database')

program.parse(process.argv)

let nbQuestions = 10
let type = 'boolean'
let user = false
let ctgId = null
let listThemAll = {}
const verifyNumber = /^[0-9]*$/

if (program.listCategories){
    categories.lister()
    return
}
if (program.listusers) {
    dbManager.showUsers()
    return
}
if (program.export) {
    fileManager.writeScore(program.export)
    return 
}

    
if (verifyNumber.test(program.number)) 
    nbQuestions = program.number
if (program.multiple) 
    type = 'multiple'
if (program.username) {
    user = program.username
    dbManager.checkUser(user)
}

let apiCall = 'api.php?amount=' + nbQuestions +'&type=' + type

if (program.difficulty) 
    apiCall += '&difficulty=' + program.difficulty
if (program.listCategories)
	categories.lister()

if (verifyNumber.test(program.category)) {
    let category = program.category + 9
    apiCall += '&category=' + category
}   
    
console.log(chalk.yellow("quiz -h to showing all options"))
game.launch(nbQuestions, type, apiCall, user)

