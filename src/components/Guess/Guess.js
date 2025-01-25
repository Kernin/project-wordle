import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

const numGuess = NUM_OF_GUESSES_ALLOWED;

function Guess({ guessList }) {
	return (
		<div>
			{range(6).map((item) => (
				<p className='guess' key={crypto.randomUUID()}>
					{range(5).map((guessItem) => (
						<span className='cell' key={crypto.randomUUID()}></span>
					))}
				</p>
			))}
		</div>
	);
}

export default Guess;
