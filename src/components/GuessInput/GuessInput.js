import React from 'react';

function GuessInput() {
	// Text input for Guess
	const [guessInput, setGuessInput] = React.useState('');

	function preventEvent(event) {
		event.preventDefault();
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
				onChange={(event) => {
					setGuessInput(event.target.value);
				}}
			/>
		</form>
	);
}

export default GuessInput;
