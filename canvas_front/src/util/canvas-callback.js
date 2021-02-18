export const setFire = (value, newValue, app) => {
    app.fire(value + ":set", newValue);
};
export const setFireColor = (newValue, app) => {
    app.fire("color:set", newValue);
}
export const setFireCamera = (newValue, app) => {
    app.fire("camera:set", newValue);
}
export const setFireEnvironement = (newValue, app) => {
    app.fire("env:set", newValue);
}
export const setFireIntExt = (newValue, app) => {
    app.fire("intext:set", newValue);
}
export const setTest=()=>{
    return(
        alert("alert from react")
    )
}

window.lightandshadow_fire = {setFire, setFireColor, setFireIntExt, setFireEnvironement, setFireCamera, setTest}