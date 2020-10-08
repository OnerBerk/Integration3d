import React, {useState} from 'react'
import Button from '../componentUi/button/button'
import axios from 'axios'

import '../../resources/variables.scss'


const Color = (props) => {
    const [color,setColor] = useState('black')

    const red = () => {
        return(
            console.log('red')        
        )}

    const green = () => {
        return(
            console.log('green')
        )}

    const blue = () => {
        return(
            console.log('blue')
        )}

    return(
        <div className="color">
            <Button className="colorRed" onClick={()=> {red()}}> Red  </Button> 
            <Button className="colorBlue"onClick={()=> {blue()}}> Blue </Button>
            <Button className="colorGreen" onClick={()=> {green()}}> green </Button>      
        </div>
    )}
export default Color