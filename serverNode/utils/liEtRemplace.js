let fs = require('fs')

function readandremplace(file, from, to) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (fs.existsSync(file)) {
            let result = data.replace(from, to);
            fs.writeFile(file, result, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                } else {
                    console.log("occurrences remplacés ")
                }
            })
        } else {
            return console.log("pas de fichier a ce nom")
        }
    })
}

module.exports = {readandremplace}


//const regex = new RegExp('^' + str + ':', 'i');
