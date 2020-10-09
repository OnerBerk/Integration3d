import React, { useState } from 'react'
import Button from '../componentUi/button/button'

import '../../resources/variables.scss'


const Environment = (props) => {
    const [environment, setenvironment] =useState('')

    const mountain = () => {
        return(
            console.log('mountain')
        )}
    const road = () => {
        return(
            console.log('road')
        )}
    const heli = () => {
        return(
            console.log('heli')
        )}
    const bridge = () => {
            return(
                console.log('bridge')
            )}

    return(
        <div className="environment">
            <Button className="mountain" onClick={()=> {mountain()}}> Mountain  </Button> 
            <Button className="road" onClick={()=> {road()}}> Road </Button>
            <Button className="heli" onClick={()=> {heli(); setenvironment('heli')}}> Heli </Button> 
            <Button className="bridge" onClick={()=> {bridge(); setenvironment('Bridge')}}> Bridge </Button>     
        </div>
    )
}
export default Environment