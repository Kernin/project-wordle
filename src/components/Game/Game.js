import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
	const [guessOption, setGuessOption] = React.useState([]);

	const [guessStatus, setGuessStatus] = React.useState([]);

	// Handler for the guess. Basically we cannot pass the guess as it is, bc we need the complete word not the medium copy as we type, so well use the handler to create an array and then send that array for the guessResult
	function handleSubmitGuess(guess) {
		setGuessOption([...guessOption, guess]);
	}

	return (
		<>
			{/* show list of guess's */}

			<GuessResult
				guessOption={guessOption}
				guessStatus={guessStatus}
				answer={answer}></GuessResult>

			{/* lifted user guess and creates the list of guesses */}
			<GuessInput handleSubmitGuess={handleSubmitGuess} />
		</>
	);
}

export default Game;
