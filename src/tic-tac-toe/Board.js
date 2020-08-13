import React, {useState} from 'react';
import Square from './Square'
import '../panels/game.css'


function Board(props) {
    const [board, setBoard] = useState(props.field);
    function onChange(cell, chip) {
        setBoard(
            prevState => ({
                ...prevState,
                [cell]: chip
            })
        );
    }

    return (
        <div className='field'>
            <div className='board-row'>
                <Square text={board['1']} cell={1} chip={props.chip} onChange={onChange}/>
                <Square text={board['2']} cell={2} chip={props.chip} onChange={onChange}/>
                <Square text={board['3']} cell={3} chip={props.chip} onChange={onChange}/>
            </div>
            <div className='board-row'>
                <Square text={board['4']} cell={4} chip={props.chip} onChange={onChange}/>
                <Square text={board['5']} cell={5} chip={props.chip} onChange={onChange}/>
                <Square text={board['6']} cell={6} chip={props.chip} onChange={onChange}/>
            </div>
            <div className='board-row'>
                <Square text={board['7']} cell={7} chip={props.chip} onChange={onChange}/>
                <Square text={board['8']} cell={8} chip={props.chip} onChange={onChange}/>
                <Square text={board['9']} cell={9} chip={props.chip} onChange={onChange}/>
            </div>
        </div>
    );
}

export default Board;