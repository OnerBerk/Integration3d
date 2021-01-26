const replace = require("replace-in-file")

let fs = require('fs')

const replaceAfterDownload = async (file, from, from1, from2, to, to1, to2) => {
    const options = {
        files: file,
        from: [from, from1, from2],
        to: [to, to1, to2],
    }
    await replace(options)
        .then(results => {
            console.log('Replacement results:', results);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}


const replaceExport = async (file, text) => {
    function callback() {
        console.log("export added")
    }

    await fs.appendFile(file, text, "utf8", callback)

    /*fs.readFile(file, function (err, data) {
        if (err) {throw err}
        let buf = Buffer.from(data);
        let str = buf.toString("utf-8",);
        let split = str.split(/\s*[\r\n]+\s*!/g)
        let last = split[split.length - 1]
        //let index = last.lastIndexOf("")
        console.log(last)
        replaceAfterDownload(file, last, to)
        console.log(last)
    })*/
}


module.exports = {replaceExport, replaceAfterDownload}


