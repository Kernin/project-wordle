import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';
import Cell from '../../components/Cell';

function Guess({ guessWord, answer }) {
	// set the array of the letters and status to a variable to cycle through
	const results = checkGuess(guessWord, answer);

	return (
		<p className='guess'>
			{range(5).map((guess) => (
				<span
					key={guess}
					className={`cell ${results ? results[guess].status : undefined}`}>
					{results ? results[guess].letter : undefined}
				</span>
			))}
		</p>
	);
}

export default Guess;
