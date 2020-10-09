import React, { useState } from 'react'
import Button from '../componentUi/button/button'


import '../../resources/variables.scss'


const Color = (props) => {
    const axios = require ('axios')

    const [color, setColor]=useState('')


    

    const red = () => {
        axios.get("https://car-config.test.it.unity3d.com//cam?hval=-294.7394945581704&vval=50.76674498214743&fu=true&external_color=7&internal_color=1&view_point=0&rims=0&zoom=4.02&zoom_type=1&animations=-1&animation_status=null")
        .then(resp => { 
            let image = resp.data;
            console.log(image)
            console.log('red')
            ;})
        .catch(error=>{ console.log(error); });
        
    }

    const green = () => {
        axios.get("https://car-config.test.it.unity3d.com//cam?hval=-294.7394945581704&vval=50.76674498214743&fu=true&external_color=7&internal_color=1&view_point=0&rims=0&zoom=4.02&zoom_type=1&animations=-1&animation_status=null")
        .then(resp => { 
            let image = resp.data;
            console.log(image);
            console.log('green')
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
            <Button className="colorRed" onClick={()=> {red(); setColor('red')}}> Red  </Button> 
            <Button className="colorBlack"onClick={()=> {blue(); setColor('black')}}> Black </Button>
            <Button className="colorGreen" onClick={()=> {green(); setColor('green')}}> green </Button>      
        </div>
    )}
export default Color