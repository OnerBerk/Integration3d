const fs = require('fs');
const http = require('http');
const unzipper = require('unzipper');

const downloadZip = (url) => {
    const request = http.get(url, (res) => {
        const path = './lightandshadow/'
        if (res.statusCode === 200) {
            if (fs.existsSync(path)) {
                console.log(" this zip is already Download ");
            } else {
                res.pipe(unzipper.Extract({path: path}));
                console.log("Download and extract done on :" + path);
            }
        } else {
            return console.log("Error while downloading");
        }
        request.setTimeout(1000, () => {
            request.destroy();
        });
    })
}

module.exports = {downloadZip}