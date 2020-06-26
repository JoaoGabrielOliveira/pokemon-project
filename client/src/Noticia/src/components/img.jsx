import React from  'react';

import im1 from './img/img1.jpg'

export default props =>
    <div>
            <img src={props.src} alt="ola" />
        <div>
            {props.children}
        </div>
    </div>