import axios from "axios"
import React from "react"

export const DownloadFile = async (url) => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            axios.get(url)
                .then(function (res) {
                    //console.log("ici", res)
                    resolve(res.data)
                })
                .catch(err => console.error(err))
        })
    }, 2000)
}


export const getDataFromURL = async (url) => await new Promise((resolve, reject) => {
    setTimeout(() => {
        fetch(url)
            .then(response => response.text())
            .then(data => { resolve(data) })
    });
}, 2000);





