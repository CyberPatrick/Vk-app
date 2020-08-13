import React from 'react';
import '../panels/game.css'

function Square(props) {

    return (
        <button className='cell' onClick={() => props.onChange(props.cell, props.chip)}>{props.text}</button>
    );
}

export default Square