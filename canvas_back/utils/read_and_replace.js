const replace = require("replace-in-file")
const fs = require('fs')

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
        console.log("export added on :" + file)
    }

    await fs.appendFile(file, text, "utf8", callback)
}

module.exports = {replaceExport, replaceAfterDownload}


