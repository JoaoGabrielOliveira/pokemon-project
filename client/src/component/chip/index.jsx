import React from 'react';
import './index.scss';

function ChangeColors(event, color)
{
    event.target.style.backgroundColor ='#' + color;
    event.target.style.boxShadow = '0 0 3px 3px #' + color + '80';
    event.target.style.color = '#fff';
}

function OutMouse(event, color)
{
    event.target.style.backgroundColor = 'white';
    event.target.style.boxShadow = 'none';
    event.target.style.color = '#' + color;
}

const Chip = (props) => {

    const CommonState = {
        borderColor: '#' + props.color,
        color:'#' + props.color
    };

    let chip = <div className="chip" onClick={props.func} style={CommonState}
    onMouseEnter={(e) => ChangeColors(e,props.color)}
    onMouseLeave={(e) => OutMouse(e,props.color) } >
        {props.name}
        {props.children}
    </div>;

    return(chip);
}



export default Chip;