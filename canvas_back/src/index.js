const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const serveIndex = require('serve-index');
const rgx = require("../config/config")
const cors = require('cors');

const modifyFileFunc = require("./utils/read_and_replace");
const downloadFunc = require("./utils/download-zip");
const indent = require("./utils/beautify-indent");

app.use(cors());

downloadFunc.downloadZip(rgx.titacZipUrl);

setTimeout(() => {
    indent.indent(rgx.configPath)
}, 500);

setTimeout(() => {
    modifyFileFunc.replaceAfterDownload(
        rgx.configPath,
        rgx.asset,
        rgx.gameScript,
        rgx.scene,

        rgx.newAssetFile,
        rgx.newGameScript,
        rgx.newScene,
    )
    modifyFileFunc.replaceAsset(rgx.settingPath,rgx.assetSetting,rgx.newAssetSetting)
    modifyFileFunc.replaceExport(rgx.settingPath, rgx.settingExport)
    modifyFileFunc.replaceExport(rgx.modulesPath, rgx.modulesExport)
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

