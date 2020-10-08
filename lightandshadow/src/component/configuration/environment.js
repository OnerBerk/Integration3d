import React, {useState} from 'react'
import Button from '../componentUi/button/button'

import '../../resources/variables.scss'


const Environment = (props) => {
    const [color,setColor] = useState('black')

    const mountain = () => {
        return(
            console.log('mountain')
        )}
    const road = () => {
        return(
            console.log('road')
        )}
    const city = () => {
        return(
            console.log('city')
        )}
    const garage = () => {
            return(
                console.log('garage')
            )}

    return(
        <div className="environment">
            <Button onClick={()=> {mountain()}}> Mountain  </Button> 
            <Button onClick={()=> {road()}}> Road </Button>
            <Button onClick={()=> {city()}}> City </Button> 
            <Button onClick={()=> {garage()}}> Garage </Button>     
        </div>
    )
}
export default Environment