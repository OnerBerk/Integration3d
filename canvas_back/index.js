const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const serveIndex = require('serve-index');
let cors = require('cors')

const rwfunc = require("./utils/read_and_replace")
const downfunc = require("./utils/download")
const indent = require("./utils/beautify")

app.use(cors())

downfunc.downloadZip("http://localhost:8080/tictac.zip")

setTimeout(() => {
    rwfunc.replaceAfterDownload(
        './lightandshadow/tictac/config.json',
        /"url": "f/g,
        /"url": "_/g,
        /"url": "9/g,

        "\"url\": \"http://localhost:8000/lightandshadow/tictac/f",
        "\"url\": \"http://localhost:8000/lightandshadow/tictac/_",
        "\"url\": \"http://localhost:8000/lightandshadow/tictac/9"
    )
    rwfunc.replaceExport('./lightandshadow/tictac/__settings__.js', "\rwindow.lightandshadow_setting =  Setting")
    rwfunc.replaceExport('./lightandshadow/tictac/__modules__.js', "\rwindow.lightandshadow_modules =  loadModules")
}, 800);

setTimeout(() => {
    indent.indent('./lightandshadow/tictac/config.json')
}, 500)

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Node API Server is Ready');
});

app.use('/lightandshadow', express.static('lightandshadow'),
    serveIndex('lightandshadow' +
        '', {'icons': true}))

app.listen(port, () => {
    console.log('lance sur port' + port);
});

