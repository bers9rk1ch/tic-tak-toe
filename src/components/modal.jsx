import React from 'react';
import './modal.css';

const Modal = ({visible, winner, setVisible, img, setColor, checked, colorBg}) => {
	const h = winner.split(' ');
	const styles__modals = {
		visibility: visible ? 'visible': 'hidden',
		opacity: visible ? '1': '0',
	}
	if (checked) {
		let number = Math.floor(Math.random() * img)
		while (number === 0) { number = Math.floor(Math.random() * img) }
		var styleVideo = {
			background: `url(media/gif${number}.gif) center / cover no-repeat`
		}
	}
	
	return (
		<div className='modal' style={styles__modals}>
			<div className='container__modal' style={styleVideo}>
				<h1 className='h'>
					<span>{h[0]}</span>
				</h1>
				<span className='h-text' style={{color: h[1] === 'X' ? setColor[0] : setColor[1]}}>
					{h[1]}
				</span>
				<div className='btn__cont__modal'>
					<button style={{ '--colorBgBsh': colorBg, }} className='btn__modal' onClick={() => {setVisible(false)}}>Играть снова</button>
				</div>
			</div>
		</div>
	)
}

export default Modal;