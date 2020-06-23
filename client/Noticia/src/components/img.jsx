import React from  'react';

export default props =>
    <div>
        <img width='150%' src={props.src} alt='Outra coisa' />
        <div>
            {props.children}
        </div>
    </div>