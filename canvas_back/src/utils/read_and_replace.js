const replace = require("replace-in-file");
const fs = require('fs');

const replaceAfterDownload = (file, from, from1, from2,from3, to, to1, to2, to3) => {
    const options = {
        files: file,
        from: [from, from1, from2, from3],
        to: [to, to1, to2, to3],
    }
    replace(options)
        .then(results => {
            console.log('Replacement results:', results);
        })
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

const replaceExport = (file, text) => {
    const callback = () => {
        console.log("export added on :" + file);
    }
    fs.appendFile(file, text, "utf8", callback);
}

module.exports = {replaceExport, replaceAfterDownload}


