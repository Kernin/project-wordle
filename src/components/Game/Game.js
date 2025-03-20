import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import Guess from '../Guess/Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessInput, setGuessInput] = React.useState('');
	const [guessList, setGuessList] = React.useState([]);

	return (
		<>
			{/* show list of guess's */}

			<Guess guess={guessInput} guessList={guessList} sample={answer}></Guess>

			{/* lifted user guess and creates the list of guesses */}
			<GuessInput
				guessList={guessList}
				guessInput={guessInput}
				setGuessInput={setGuessInput}
				setGuessList={setGuessList}
				sample={answer}
			/>
		</>
	);
}

export default Game;
