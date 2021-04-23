module.exports = {

    titacZipUrl: "http://localhost:8080/tictac.zip",
    settingPath: './lightandshadow/tictac/__settings__.js',
    configPath: './lightandshadow/tictac/config.json',
    modulesPath: './lightandshadow/tictac/__modules__.js',
    settingsPath:'./http://localhost:8000/lightandshadow/tictac/__settings__.js',

    asset: /"url": "f/g,
    newAssetFile: "\"url\": \"http://localhost:8000/lightandshadow/tictac/f",

    gameScript: /"url": "_/g,
    newGameScript: "\"url\": \"http://localhost:8000/lightandshadow/tictac/_",

    scene: /"url": "9/g,
    newScene: "\"url\": \"http://localhost:8000/lightandshadow/tictac/9",

    startImage: "\"url\": \"http://localhost:8000/lightandshadow/tictac/files/assets/33491331/1/start_image.JPG",
    newStartImage: "\"url\": \"1/start_image.JPG",

    settingExport: "\rwindow.lightandshadow_setting = {ASSET_PREFIX,SCRIPT_PREFIX,SCENE_PATH,CONTEXT_OPTIONS,SCRIPTS,CONFIG_FILENAME,INPUT_SETTINGS,PRELOAD_MODULES}",
    modulesExport: "\rwindow.lightandshadow_modules =  loadModules",

    assetSetting: "ASSET_PREFIX = \"\"",
    newAssetSetting: "ASSET_PREFIX = \"http://localhost:8000/lightandshadow/tictac/files/assets/\""
}
