import React from 'react'
import './button.scss'

const Button = ({ children, ...additionalStyles}) => {
    return(
        <button className="button"{...additionalStyles}>
        {children}
        </button>
    )
}
export default Button