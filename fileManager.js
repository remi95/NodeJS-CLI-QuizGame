const fs = require('fs')
const dbManager = require('./dBManager.js')

exports.writeScore = function writeScore(user) {
    try {
        let filename
        let datas
        if (String(user) == 'true') { // Pas d'user précisé
            filename = 'scores.txt'
            datas = dbManager.showLastScores(100, filename)
        }
        else {
            filename = 'scores_' + user + '.txt'
            datas = dbManager.exportScores(user, filename)
        }
    }
    catch (error) {
        console.log("Erreur lors de l'écriture du fichier")
    }
}

exports.write = function write(datas, filename) {
    fs.writeFile(filename, datas, (error) => {
        if (error) throw error
        console.log("Scores écrits sur le fichier ", filename)
    })
}