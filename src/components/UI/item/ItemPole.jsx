import React from 'react';
import './itempole.css';

const ItemPole = (props) => {
	return (
		<div className='item' onClick={props.onClick} style={{color: props.value == 'X' ? props.color[0] : props.color[1], '--colorBg': props.color[2],}}>
			{props.value}
		</div>
	)
}

export default ItemPole;