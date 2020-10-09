import axios from 'axios'

export default axios.create({
    baseURL:"https://car-config.test.it.unity3d.com//cam?hval=-294.7394945581704&vval=50.76674498214743&fu=true&external_color=7&internal_color=1&view_point=0&rims=0&zoom=4.02&zoom_type=1&animations=-1&animation_status=null",
    headers:{ "Content-type":"application/json"}
})