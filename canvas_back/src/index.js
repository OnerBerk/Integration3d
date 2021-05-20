const express = require('express');
const fs = require('fs');
const app = express();
const serveIndex = require('serve-index');
const cors = require('cors');

const rgx = require("../config/config")
const port = process.env.PORT || 8000;

const modifyFileFunc = require("./utils/read_and_replace");
const downloadFunc = require("./utils/download-zip");
const indent = require("./utils/beautify-indent");

const path = './lightandshadow/'

app.use(cors());

downloadFunc.downloadZip(rgx.titacZipUrl);

const callback=()=> {
    indent.indent(rgx.configPath)
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
};

if (fs.existsSync(path)){
    console.log("already done")
}else
{
    setTimeout(()=>callback(),800)
}


app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Node API Server is Ready');
});

app.use('/lightandshadow', express.static('lightandshadow'),
    serveIndex('lightandshadow' +
        '', {'icons': true}));

app.listen(port, () => {
    console.log('lance sur port ' + port);
});

