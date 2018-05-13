#!/usr/bin/env node

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('quiz.db', (error) => {
    if (error) 
        console.log(err.message)
})
 
db.serialize(function() {
    db.run("DROP TABLE scores")
    db.run("DROP TABLE user")
    db.run("CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, token TEXT)")
    db.run("CREATE TABLE scores (id INTEGER PRIMARY KEY AUTOINCREMENT, score TEXT, date TEXT, user_id INTEGER REFERENCES user(id) ON DELETE CASCADE)")
});
 
db.close();