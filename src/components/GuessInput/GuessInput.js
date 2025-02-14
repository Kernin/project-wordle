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

		// create and add guess to array
		const letterInput = guessInput.split('');

		guessList.push(letterInput);
		// setGuessList([...guessList]);
		const comparingList = checkGuess(guessInput, sample);
		// setGuessList(...comparingList);
		// console.log('comparingList: ', comparingList);

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
