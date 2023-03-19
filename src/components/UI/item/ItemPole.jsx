import React from 'react';
import './itempole.css';

const ItemPole = (props) => {
	return (
		<div className='item' onClick={props.onClick}>
			{props.value}
		</div>
	)
}

export default ItemPole;