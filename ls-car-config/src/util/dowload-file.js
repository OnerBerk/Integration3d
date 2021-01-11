import axios from "axios"

export const DownloadFile = async (url) => {
    await axios.get(url)
        .then(function (res) {
            const module = res.data
            console.log("res de l'axios ", module)
            return module
        });
}

export const LoadModule = () => {

}



