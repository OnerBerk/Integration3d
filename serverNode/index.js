const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
let cors = require('cors')
const serveIndex = require('serve-index');

const rwfunc = require("./utils/liEtRemplace")
const downfunc = require("./utils/dowload")

app.use(cors())


//rwfunc.readandremplace('./lightandshadow/tictac/test.json', /url/g, "urli")
//downfunc.dowload("http://localhost:8080/conf.zip")



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

