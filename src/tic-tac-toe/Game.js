import React, {useState} from 'react';
import Board from './Board'

let field = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: ''
};


function Game() {
    return (
        <Board field={field} />
    )
}

export default Game;