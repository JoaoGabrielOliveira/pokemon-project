import React from  'react';


export default props =>
    <div>
            <img src={props.src} alt="ola" />
        <div>
            {props.children}
        </div>
    </div>