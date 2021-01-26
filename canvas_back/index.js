const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
let cors = require('cors')
const serveIndex = require('serve-index');

const rwfunc = require("./utils/read_and_replace")
const downfunc = require("./utils/download")

app.use(cors())

downfunc.download("http://localhost:8080/conf.zip").then(r => console.log("done"))
rwfunc.replaceAfterDownload('./lightandshadow/tictac/testReplace.json', /"url": "_/g, "\"url\": \"http://localhost:8000/lightandshadow/tictac/_")
rwfunc.replaceAfterDownload('./lightandshadow/tictac/testReplace.json', /"url": "f/g, "\"url\": \"http://localhost:8000/lightandshadow/tictac/f")
rwfunc.replaceAfterDownload('./lightandshadow/tictac/testReplace.json', /"url": "9/g, "\"url\": \"http://localhost:8000/lightandshadow/tictac/9")
rwfunc.replaceExport('./lightandshadow/tictac/testReplace.js',"window.lightandshadow_setting =  Setting")

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

