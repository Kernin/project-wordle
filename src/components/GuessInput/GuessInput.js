import React from 'react';

function GuessInput({ guessInput, setGuessInput, guessList, setGuessList }) {
	function preventEvent(event) {
		event.preventDefault();

		// create and add guess to array
		let userGuess = [...guessList];
		userGuess.push(guessInput);
		setGuessList(userGuess);

		// Console log guess and clear the input
		console.log({ guessInput });
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
					setGuessInput(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
