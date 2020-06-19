import React from  'react';

const styled = {
    
}

export default props =>
    <div>
            <img width='150%' src={props.src} alt='Img' />
        <div>
            {props.children}
        </div>
    </div>