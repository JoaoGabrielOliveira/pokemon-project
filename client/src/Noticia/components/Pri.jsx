import React from 'react'




export default props => 
    <div style={{padding:'5% 3% 3% 3%'}} >
        <p style={{textAlign:"justify"}}>{props.text}</p>
    {props.children}
    </div>
