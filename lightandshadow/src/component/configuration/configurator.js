import React from 'react'
import Color from './color'
import Environment from './environment'
import Material from './material'
import Accesory from './accesory'
import View from './view'
import styles from './configuration.scss'

function Configurator(){
    return<div className="configurator" >            
            <button> <Color/> </button>
            <button> <Environment/> </button>
            <button> <Material/> </button>
            <button> <Accesory/> </button>
            <button> <View/> </button>
    </div>
}

export default Configurator