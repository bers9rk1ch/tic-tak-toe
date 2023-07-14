import React, { useState } from 'react';
import './header.css';

const Header = ({is, removePole, setColor}) => {

	return (
		
		<header className='header'>
			<h1><span className='text_isNext'>Ход:</span> <br /><span className='isnext' style={{
				color: is ? setColor[0] : setColor[1],
			}}>{is ? 'X' : 'O'}</span></h1>
			<button className='btn' onClick={removePole}>Очистить поле</button>
		</header>
	)
}

export default Header;