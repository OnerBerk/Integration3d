const replace = require("replace-in-file")

let fs = require('fs')

function ReplaceAfterDownload(file, from, to) {
    const options = {
        files: file,
        from: from,
        to: to
    }
    replace(options)
        .then(results => {
            console.log('Replacement results:', results);
            return results
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

const ReplaceExport = (file, to) => {
    fs.readFile(file, function (err, data) {
        if (err) {
            throw err
        }
        let buf = Buffer.from(data);
        let str = buf.toString("utf-8",);
        let split = str.split(/\s*[\r\n]+\s*/g)
        let last = split[split.length - 1]
        //let index = last.lastIndexOf("")
        console.log(last)
        ReplaceAfterDownload(file, last, to)
        console.log(last)
    })
}


module.exports = {ReplaceExport, ReplaceAfterDownload}


