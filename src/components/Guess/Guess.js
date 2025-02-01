import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({ guessInput = '', guessList, setGuessList }) {
	const numGuess = NUM_OF_GUESSES_ALLOWED;

	console.log('guess list: ', guessList);

	// guessList now has words separated by words
	// we now have to place those words in spans

	return (
		<div className='guess-results'>
			{/* grid of 6 <p> vertical for guess */}
			{range(numGuess).map((item) => (
				<p className='guess' key={crypto.randomUUID()}>
					{/* grid for 5 letter horizontal of the guess */}
					{range(5).map((letter) => (
						<span className='cell' key={crypto.randomUUID()}>
							{''}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default Guess;
