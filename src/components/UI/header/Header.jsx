import React, { useState } from 'react';
import './header.css';

const Header = ({is, removePole}) => {

	return (
		
		<header className='header'>
			<h1>Сейчас ходит: <br /><span className='isnext'>{is ? 'X' : 'O'}</span></h1>
			<button className='btn' onClick={removePole}>Очистить поле</button>
		</header>
	)
}

export default Header;