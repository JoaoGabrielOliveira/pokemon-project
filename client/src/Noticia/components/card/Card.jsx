import React from 'react'
import './Card.css'

export default props =>
   <div className="Card" style={{borderColor: props.color || '#000', background:props.color + '08' || '#ede'}}>
       
      <div className="Titulo" style={{backgroundColor: props.Color || '#000'}}>
          {props.titulo}
      </div>

      <div className="conteudo">
          {props.children}
      </div>
   </div>
 