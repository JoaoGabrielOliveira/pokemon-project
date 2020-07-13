import React from 'react'

export default props => {

    return(
    <div style={ {padding:'5px',fontWeight:'bold',color:'#fff',textAlign:'center', fontSize:'100%', backgroundColor: props.Color || '#000'}}>
        {props.titulo}
    </div>
    );
}



