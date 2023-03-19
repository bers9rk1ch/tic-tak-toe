import React, { useState } from 'react';
import GamePole from './gamePole';
import { CalcWinner } from '../calcWinner';
import './game.css';
import Header from './UI/header/Header';
var hod = 0;
const Game = () => {
	const [checkeds, setChecked] = useState(false)
	const [gamePole, setGamePole] = useState(Array(9).fill(null))
	const [isNext, setIsNext] = useState(true)
	const winner = CalcWinner(gamePole)

	const endGame = (arg) => {
		alert(arg)
		setGamePole(Array(9).fill(null))
		setIsNext(true)
		hod = 0;

	}
	

	

	const handleClick = () => {
		setGamePole(Array(9).fill(null))
		setIsNext(true)
		hod = 0;
		setChecked(!checkeds)
		

	}

	if (winner) return endGame(`Победил ${!isNext ? 'X' : 'O'}`)
	else if (hod === 9) return endGame(`Ничья`)

	if (checkeds) {
		if (!isNext) {
			const gamePoleCopy = [...gamePole]
			let rand = Math.floor(Math.random()* 8);
			while (gamePoleCopy[rand]) {
				rand = Math.floor(Math.random()* 8);
			}
			setTimeout(() => {
				gamePoleCopy[rand] = 'O';
				setGamePole(gamePoleCopy)
				hod++;
				setIsNext(!isNext)
			},'500')
			
		}
	}
	

	

	const clicked = (index) => {
		const gamePoleCopy = [...gamePole]
		if (gamePoleCopy[index] || checkeds && !isNext) return
		gamePoleCopy[index] = isNext ? 'X' : 'O'
		setGamePole(gamePoleCopy)
		setIsNext(!isNext)
		hod++;
	}

	 const removePole = () => {
		hod = 0;
		setIsNext(true)
		setGamePole(Array(9).fill(null))
	}
  return (
	<div className='game'>
		<div className='content'>
			<h1 className='zag'>ИИ</h1>
			<input className='check' type="checkbox" onClick={handleClick} checked={checkeds} onChange={e => e.target.checkeds}/>
		</div>
		<div>
		<GamePole squares={gamePole} click={clicked}/>
		</div>
		
		<Header is={isNext} removePole={removePole}/>
		
	</div>
  )
}

export default Game;