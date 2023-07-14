import React from 'react';
import './robot.css'

const Robot = ({click, checked}) => {
	return (
		<div className='pc_content'>
			<h1 className='zag'>ИИ</h1>
			<div className='check_cont'>
				<input className='check' type="checkbox" onClick={click} checked={checked} onChange={e => e.target.checkeds}/>
			</div>
		</div>
	)
}

export default Robot;