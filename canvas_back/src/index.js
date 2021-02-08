const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const serveIndex = require('serve-index');
const rgx = require("../config/config")
const cors = require('cors');

const rwfunc = require("./utils/read_and_replace");
const downfunc = require("./utils/download-zip");
const indent = require("./utils/beautify-indent");

app.use(cors());

//downfunc.downloadZip(rgx.titacZipUrl);

setTimeout(() => {
    indent.indent(rgx.configPath)
}, 500);

setTimeout(() => {
    rwfunc.replaceAfterDownload(
        rgx.configPath,
        rgx.asset,
        rgx.gameScript,
        rgx.scene,
        rgx.startImage,

        rgx.newAssetFile,
        rgx.newGameScript,
        rgx.newScene,
        rgx.newStartImage
    )
    rwfunc.replaceExport(rgx.settingPath, rgx.settingExport)
    rwfunc.replaceExport(rgx.modulesPath, rgx.modulesExport)
}, 800);


app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Node API Server is Ready');
});

app.use('/lightandshadow', express.static('lightandshadow'),
    serveIndex('lightandshadow' +
        '', {'icons': true}));

app.listen(port, () => {
    console.log('lance sur port' + port);
});

