import React from 'react';
import './index.scss';

const Chip = (props) => {
    return(
    <div class="chip" onClick={props.func} style={{backgroundColor: '#' + props.color }}>
        {props.name}
    </div>
    );
}



export default Chip;