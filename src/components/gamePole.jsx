import React from 'react';
import ItemPole from './UI/item/ItemPole';
import'./gamePole.css';


const GamePole = ({squares, click, setColor}) => {
	return (
		<div className='container'>
			{
				squares.map((square, i) => {
					return <ItemPole color={setColor} key={i} value={square} onClick={() => click(i)} />
				})
				
			}
		</div>
	)
}

export default GamePole;