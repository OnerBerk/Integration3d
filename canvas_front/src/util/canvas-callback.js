import React from "react";

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
