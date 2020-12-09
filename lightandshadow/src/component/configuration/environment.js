import React, { useState } from 'react'
import Button from '../componentUi/button/button'


const Environment = (props) => {
    const [environment, setenvironment] =useState('')

    const mountain = () => {
        console.log('mountain',environment)
        return(
            setenvironment('mountain')
            
        )}
    const road = () => {
        console.log('road')
        return(
            setenvironment('road')
        )}
    const heli = () => {
        console.log('heli')
        return(
            setenvironment('heli')
        )}
    const bridge = () => {
        console.log('bridge')
            return(
                setenvironment('bridge')
            )}

    return(
        <div className="environment">
            <Button className="mountain" onClick={()=> {mountain()}}>Mountain  </Button> 
            <Button className="road" onClick={()=> {road()}}> Road </Button>
            <Button className="heli" onClick={()=> {heli(); setenvironment('heli')}}> Heli </Button> 
            <Button className="bridge" onClick={()=> {bridge(); setenvironment('Bridge')}}> Bridge </Button>     
        </div>
    )
}
export default Environment