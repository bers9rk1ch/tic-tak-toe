import React, { useState } from 'react';
import GamePole from './gamePole';
import { CalcWinner } from '../calcWinner';
import './game.css';
import Header from './header/Header';
import Modal from './modal';
import Navbar from './navbar/navbar';
import ModalSettings from './modalSettings/modal_settings';
import Robot from './robot/robot';

const Game = () => {
	const [checkeds, setChecked] = useState(false)
	const [checkedBg, setCheckedBg] = useState(true)
	const [checkedIsNext, setCheckedIsNext] = useState(false)
	const [gamePole, setGamePole] = useState(Array(9).fill(null))
	const [isNext, setIsNext] = useState(true)
	const [visible, setVisible] = useState(false)
	const [visibleSettings, setVisibleSettings] = useState(false)
	const [step, setStep] = useState(0)
	const [msg, setMsg] = useState('')
	const [img, setImg] = useState(13)
	// color
	const [colorX, setColorX] = useState('#FF0000')
	const [colorO, setColorO] = useState('#0000FF')
	const [colorBg, setColorBg] = useState('#008000')

	const winner = CalcWinner(gamePole)


	const gameInit = () => {
		setGamePole(Array(9).fill(null))
		setIsNext(true)
		setStep(0);
	}

	const endGame = (arg) => {
		setMsg(arg)
		setVisible(true);
		gameInit();
	}

	const handleClick = () => {
		gameInit()
		setChecked(!checkeds)
	}

	const clicked = (index) => {
		const gamePoleCopy = [...gamePole]
		if (gamePoleCopy[index] || checkeds && !isNext) return
		gamePoleCopy[index] = isNext ? 'X' : 'O'
		setGamePole(gamePoleCopy)
		setIsNext(!isNext)
		setStep(step + 1)
	}

	if (winner) return endGame(`Победил: ${!isNext ? 'X' : 'O'}`)
	else if (step === 9) return endGame(`Ничья`)

	if (checkeds && !isNext) {
		const gamePoleCopy = [...gamePole]
		let rand = Math.floor(Math.random()* 8);
		while (gamePoleCopy[rand]) {
			rand = Math.floor(Math.random()* 8);
		}
		setTimeout(() => {
			gamePoleCopy[rand] = 'O';
			setGamePole(gamePoleCopy)
			setStep(step + 1)
			setIsNext(!isNext)
		},'500')
	}
  return (
	<div className='all_container'>
		<ModalSettings
		color={[colorX, colorO, colorBg]}
		visible={visibleSettings}
		setVisibleSettings={setVisibleSettings}
		setColor={[setColorX, setColorO, setColorBg]}
		checked={checkedBg}
		setChecked={setCheckedBg}
		checkedIsNext={checkedIsNext}
		setCheckedIsNext={setCheckedIsNext}
		/>

		<Modal
		colorBg={colorBg}
		checked={checkedBg}
		visible={visible}
		winner={msg}
		setVisible={setVisible}
		img={img}
		setColor={[colorX, colorO]}
		/>

		<Navbar
		colorBg={colorBg}
		visible={visible}
		setVisibleSettings={setVisibleSettings}
		click={handleClick}
		checked={checkeds}
		/>

		<div className='game'>
			<Robot click={handleClick} checked={checkeds}/>
			<GamePole squares={gamePole} click={clicked} setColor={[colorX, colorO, colorBg]}/>
			<Header is={isNext} removePole={gameInit} setColor={[colorX, colorO]}/>
		</div>
		
		
	</div>
  )
}

export default Game;