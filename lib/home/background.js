import React from 'react'

import './index.css'
import Esquerda from './esquerda.jpg'
import Direita from './direita.jpg'
import Esse from './esse.png'


export default class Background extends React.Component {
    render(){
        return(
            <div className="logo">
                <img src={Esse} alt='logo' width="800px" />
            </div>
        );
    }
}