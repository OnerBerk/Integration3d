import React from 'react'
import styles from "../../styles/conf.module.scss"


const Color = (props) => {
    
    const colorRef = React.useRef(null)
    let app = props.appRef
    
    const setColor = (newColor) =>{ app.fire("color:set", newColor) };
    colorRef.current = setColor;

    return(
        <div className={styles.color}>
            <p className={styles.colorRed} onClick={()=> colorRef.current("red")}> Red  </p> 
            <p className={styles.colorBlack} onClick={()=> colorRef.current("black") }> Black </p>
            <p className={styles.colorGreen} onClick={()=> colorRef.current("green")}> green </p>  
        </div>
    )}
    
export default Color