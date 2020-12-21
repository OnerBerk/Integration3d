
import axios from "axios"

const DowloadZip = async () => {
        const result = await axios.get("http://localhost:8080/zip");
        console.log("jsuis la ",result)
}
export default DowloadZip


