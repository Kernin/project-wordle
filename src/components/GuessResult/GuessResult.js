import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess';

function GuessResult({ guessOption, guessStatus, answer }) {
	//the game option comes from the function that controls the guess Input

	// console.log('guessOption ', guessOption);
	// console.log('status', guessStatus);

	return (
		// this generates the rows in given amount of allowed guesses
		<div className='guess-results'>
			{range(NUM_OF_GUESSES_ALLOWED).map((i) => (
				<Guess
					guessWord={guessOption[i]}
					guessStatus={guessStatus}
					answer={answer}
					key={crypto.randomUUID()}></Guess>
			))}
		</div>
	);
}

export default GuessResult;
