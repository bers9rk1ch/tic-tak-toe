import React from 'react';
import './navbar.css'
import Robot from '../robot/robot';

const Navbar = ({setVisibleSettings, colorBg, click, checked}) => {
	console.log(checked)
	return (
		<header className='navbar'>
				<div className='navbar__item svg' style={{ '--colorBgSvg': colorBg, }}>
					<a className='nav_link' href="https://github.com/DaRkLoTii" target="_ blank"><ion-icon class="svg__item" name="logo-github"></ion-icon></a>
					<a className='nav_link' href="" target="_ blank"><ion-icon class="svg__item" name="logo-vk"></ion-icon></a>
					<a className='nav_link' href="" target="_ blank"><ion-icon class="svg__item" name="logo-steam"></ion-icon></a>
				</div>
				<div className='navbar__item settings display_mob'>
					<ion-icon class='svg__sett' name="settings-outline" onClick={() => {setVisibleSettings(true)}}></ion-icon>
				</div>
				<h1 className='navbar__item nameGame-z'>Крестики Нолики</h1>
				
				<div className='navbar__item settings display_pc'>
					<ion-icon style={{ '--colorBgSet': colorBg, }} class='svg__sett' name="settings-outline" onClick={() => {setVisibleSettings(true)}}></ion-icon>
				</div>
				{/*robot*/}
				{console.log(checked)}
				<div className='navbar__item m_content'>
					<h1 className='zag'>ИИ</h1>
					<div className='check_cont'>
						<input
						className='check'
						type="checkbox"
						onClick={click}
						checked={checked}
						onChange={e => e.target.checked}/>
					</div>
				</div>
		</header>
	)
}

export default Navbar