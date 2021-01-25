const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
let cors = require('cors')
const serveIndex = require('serve-index');

const rwfunc = require("./utils/liEtRemplace")
const downfunc = require("./utils/dowload")

app.use(cors())

//downfunc.dowload("http://localhost:8080/conf.zip")
rwfunc.ReplaceAfterDownload('./lightandshadow/tictac/testReplace.json', /"url": "_/g, "\"url\": \"http://localhost:8000/lightandshadow/tictac/_")
rwfunc.ReplaceAfterDownload('./lightandshadow/tictac/testReplace.json', /"url": "f/g, "\"url\": \"http://localhost:8000/lightandshadow/tictac/f")
rwfunc.ReplaceAfterDownload('./lightandshadow/tictac/testReplace.json', /"url": "9/g, "\"url\": \"http://localhost:8000/lightandshadow/tictac/9")
rwfunc.ReplaceExport('./lightandshadow/tictac/testReplace.js',"window.lightandshadow_setting =  Setting")

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Le serveur Node API');
});

app.use('/lightandshadow', express.static('lightandshadow'),
    serveIndex('lightandshadow' +
        '', { 'icons': true }))

    app.listen(port, () => {
    console.log('lance sur port' + port);
});

