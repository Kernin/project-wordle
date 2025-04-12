import React from 'react';

function GuessInput({ handleSubmitGuess }) {
	const [guessInput, setGuessInput] = React.useState('');

	function preventEvent(event) {
		event.preventDefault();

		// pass value up to game.js (which created the function)
		handleSubmitGuess(guessInput);
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
