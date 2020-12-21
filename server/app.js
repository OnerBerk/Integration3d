const express = require('express');
const app = express();
const path = require('path')
const zip = require('express-easy-zip')
const cors = require('cors')

app.use(cors())

app.use(zip());

app.get('/zip', async function (req, res) {
    const dirPath = __dirname + "/transfer/";
    await res.zip({
        files: [{
            path: dirPath,
            name: 'Module'
        }],
        filename: '953348.json, __game-script.js'
    });
});

app.listen(8080, () =>
    console.log('listening on port 8080!')
);