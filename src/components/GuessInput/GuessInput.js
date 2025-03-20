import React from 'react';
import { checkGuess } from '../../game-helpers';

function GuessInput({
	guessInput,
	setGuessInput,
	guessList = [],
	setGuessList,
	sample = '',
}) {
	function preventEvent(event) {
		event.preventDefault();

		// using function on guess and comparing it to answer, adding to new array
		const comparingList = checkGuess(guessInput, sample);

		// Function to add new guess object to setGuessList
		function addGuess(newGuess) {
			setGuessList((prevGuess) => [...prevGuess, newGuess]);
		}

		// use adding function to the variable that holds the result of comparing function
		addGuess(comparingList);

		// === CONSOLELOG ===
		// console.log('comparingList: ', comparingList);
		// console.log('guessList: ', guessList);

		// Console log guess and clear the input
		setGuessInput('');
	}

	return (
		<form className='guess-input-wrapper' onSubmit={preventEvent}>
			<label className='guess-input'>Enter Guess:</label>
			<input
				className='guess-input'
				id='guess'
				value={guessInput}
				type='text'
				placeholder='Your Guess'
				pattern='[A-Z]{5,5}'
				onChange={(event) => {
					const guessTxt = event.target.value.toUpperCase();
					setGuessInput(guessTxt);
				}}
			/>
		</form>
	);
}

export default GuessInput;
