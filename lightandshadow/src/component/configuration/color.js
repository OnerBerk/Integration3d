import React, { useState } from 'react'
import '../../resources/variables.scss'


const Color = (props) => {
    const axios = require ('axios')

    const [color, setColor]=useState('');
    //const [image,setImage]=useState();


    

    const red = () => {
        axios.get("ws://127.0.0.1:4649/WSS")
        .then(resp => { 
            setColor(resp.data)  ;
            console.log(color.image)
            console.log('red')
            ;})
        .catch(error=>{ console.log(error); });
    }

    const green = () => {
        axios.get("https://car-config.test.it.unity3d.com//cam?hval=-294.7394945581704&vval=50.76674498214743&fu=true&external_color=7&internal_color=1&view_point=0&rims=0&zoom=4.02&zoom_type=1&animations=-1&animation_status=null")
        .then(resp => { 
            let image = resp.data;
            console.log('green')
            console.log(image);
        })
        .catch(error=>{ console.log(error); });
    }

    const blue = () => {
        axios.get("https://car-config.test.it.unity3d.com//cam?hval=-294.7394945581704&vval=50.76674498214743&fu=true&external_color=7&internal_color=1&view_point=0&rims=0&zoom=4.02&zoom_type=1&animations=-1&animation_status=null")
        .then(resp => { 
            let image = resp.data;
            console.log(image);
            console.log('blue')
        })
        .catch(error=>{ console.log(error); });
    }

    return(
        <div className="color">
            <p className="colorRed" onClick={()=> {red(); setColor('red')}}> Red  </p> 
            <p className="colorBlack"onClick={()=> {blue(); setColor('black')}}> Black </p>
            <p className="colorGreen" onClick={()=> {green(); setColor('green')}}> green </p>  

            {/* <div>
            <img style={{display:"block", width:"100px", height:"100px"}}                 
            src={`data:image/jpeg;base64, ${image.image}`} />
                </div>     */}
        </div>
    )}
export default Color