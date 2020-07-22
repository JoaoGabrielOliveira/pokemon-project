import React from  'react';


export default props =>
    <div>
            <img src={props.src} alt="ola" style={{maxWidth:'100%', borderRadius:'0px'}} />
        <div>
            {props.children}
        </div>
    </div>