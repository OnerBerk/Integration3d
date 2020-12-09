import React from 'react'
import styles from "../../../styles/button.module.scss"

const Button = ({ children, ...additionalStyles}) => {
    return(
        <button className={styles.button} {...additionalStyles}>
        {children}
        </button>
    )
}
export default Button