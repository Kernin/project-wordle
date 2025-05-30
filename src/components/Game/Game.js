import React from 'react';
import WinScreen from '../WinScreen';
import LoseScreen from '../LoseScreen';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);

function Game() {
	const [guessOption, setGuessOption] = React.useState([]);

	const [guessStatus, setGuessStatus] = React.useState([]);

	const [guessCheck, setGuessCheck] = React.useState([]);

	// check the number of tries going
	const [numGuess, setNumGuess] = React.useState(1);

	// check if we have the right answer by setting it to 1
	const [gotAns, setGotAns] = React.useState(false);

	// Handler for the guess. Basically we cannot pass the guess as it is, bc we need the complete word not the medium copy as we type, so well use the handler to create an array and then send that array for the guessResult
	function handleSubmitGuess(guess) {
		setGuessOption([...guessOption, guess]);

		console.log(answer);
		console.log('guess: ', guess);
		console.log('num Guess', numGuess, 'value answer', gotAns);

		//  counts the number of guess made so far. But if its between or equel to 0 and 6 keeps adding else it sets variable to 0
		numGuess >= 0 && numGuess <= 6 ? setNumGuess(numGuess + 1) : setNumGuess(0);

		// set gotAns to 1 if the guess is the same as the answer
		if (guess === answer) {
			setGotAns(true);
		} else {
			setGotAns(false);
		}

		// this asks if the game continues running
		// gotAns != true && numGuess < NUM_OF_GUESSES_ALLOWED + 1;
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

			{/* if answer is false and guesses are less than limit, keep playing */}
			{gotAns != true && numGuess == NUM_OF_GUESSES_ALLOWED + 1
				? console.log(' LOOOOOSE ')
				: console.log(' == WIIIIIIIIN ==')}

			{gotAns === true ? (
				<WinScreen></WinScreen>
			) : gotAns != true && numGuess == NUM_OF_GUESSES_ALLOWED + 1 ? (
				<LoseScreen></LoseScreen>
			) : (
				console.log('still playing')
			)}
		</>
	);
}

export default Game;
