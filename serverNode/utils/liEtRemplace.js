const { strict } = require('assert');
const { readFile } = require('fs');
const readLastLines = require('read-last-lines');

let fs = require('fs').promises

function readandremplace(file, from, to) {
    fs.readFile(file, function (err, data) {
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

function read(file){
    let jsonFile =[]
    fs.readFile(file, (err, data) => {
        if (err) throw err;
         jsonFile = JSON.parse(data);
        console.log(jsonFile);
    });
}


const removestr = async(file)=>{
readLastLines.read(file, 1)
    .then((lines) => console.log(lines)) 
}

const addLine = async(file, data)=>{
    if(data)
    await fs.appendFile(file, data, "utf8",
    function(err){
        if(err){
            console.log(err)
        }
        console.log("ajouter avec succés")
    })
}

module.exports = {readandremplace,read,removestr,addLine}


