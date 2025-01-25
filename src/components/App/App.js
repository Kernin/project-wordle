import React from 'react';
import Game from '../Game';
import Header from '../Header';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult/GuessResult';
import Guess from '../Guess/Guess';

function App() {
	const [guessInput, setGuessInput] = React.useState('');
	const [guessList, setGuessList] = React.useState([]);

	return (
		<div className='wrapper'>
			<Header />

			<div className='game-wrapper'>
				<Game />

				{/* show list of guess's */}
				{/* <GuessResult guessList={guessList}></GuessResult> */}

				<Guess guessList={guessList}></Guess>

				{/* lifted user guess and creates the list of guesses */}
				<GuessInput
					guessList={guessList}
					guessInput={guessInput}
					setGuessInput={setGuessInput}
					setGuessList={setGuessList}
				/>
			</div>
		</div>
	);
}

export default App;
