const fs = require('fs')
const http = require('http')
const unzipper = require('unzipper')

function download(url) {
    const request =http.get(url, function (res) {
        const path = './lightandshadow/'
        if (res.statusCode === 200) {
            if (fs.existsSync(path)) {
                console.log("dossier deja telecharger")
            } else {
                res.pipe(unzipper.Extract({path: './lightandshadow/'}))
                console.log("Download effectué")
            }
        } else {
            return console.log("erreur lors telechargement")
        }
        request.setTimeout(1000, function () {
            request.destroy();
        });
    })
}




module.exports={download}