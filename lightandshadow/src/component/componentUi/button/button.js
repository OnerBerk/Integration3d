import React from 'react'
import './button.css'

const Button = ({ children, ...additionalStyles}) => {
    return(
        <button className="button"{...additionalStyles}>
        {children}
        </button>
    )
}
export default Button