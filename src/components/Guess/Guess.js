import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

const numGuess = NUM_OF_GUESSES_ALLOWED;

function Guess({ guessList }) {
	let i = guessList.length;
	return (
		<div>
			{/* grid of 6 <p> for guess */}
			{range(numGuess).map((item) => (
				<p className='guess' key={crypto.randomUUID()}>
					{/* grid for 5 letter of the guess */}
					{range(5).map((letter) => (
						<span className='cell' key={crypto.randomUUID()}>
							{}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default Guess;
