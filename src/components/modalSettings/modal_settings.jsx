import React from 'react';
import './modal_settings.css'

const ModalSettings = ({visible, setVisibleSettings, setColor, color, checked, setChecked, checkedIsNext, setCheckedIsNext}) => {
	const styles__modals_set = {
		visibility: visible ? 'visible': 'hidden',
		opacity: visible ? '1': '0',
	}
	return (
		<div className='modal__settings' style={styles__modals_set}>
			<div className='m_settings__container'>
				<section className='m_color'>
					<h1>Цвет</h1>
					<div className='color_in'><h3>X</h3><input type="color" value={color[0]} onChange={(e) => {setColor[0](e.target.value)}} /></div>
					<div className='color_in'><h3>O</h3><input type="color" value={color[1]} onChange={(e) => {setColor[1](e.target.value)}}  /></div>
					<div className='color_in'><h3>Тема</h3><input type="color" value={color[2]} onChange={(e) => {setColor[2](e.target.value)}} /></div>
				</section>
				<section className='m_bg-video__func'>
					<h1>Задний фон видео</h1>
					<input type="checkbox"
					checked={checked}
					onChange={e => e.target.checkeds}
					onClick={() => setChecked(!checked)}
					/>
				</section>
				{/* <section className='m_whoIsNext'>
					<h1>Кто первый?</h1>
					<div className='who_cont'>
						<h3>X</h3>
						<input type="checkbox"
						checked={checkedIsNext}
						onChange={e => e.target.checkeds}
						onClick={() => setCheckedIsNext(!checkedIsNext)}
						/>
					</div>
					
				</section> */}
				<div className='m_settings_btn_close'>
					<button onClick={() => {setVisibleSettings(false)}}>Применить</button>
				</div>
			</div>
		</div>
	)
}

export default ModalSettings;