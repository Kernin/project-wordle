import React from 'react';
import Guess from '../Guess/Guess';
import utils from '../../utils';

function GuessResult({ guessList }) {
	return (
		<div className='guess-results'>
			{/* show the letters of the guess */}

			{guessList.map((guessItem) => (
				<p className='guess' key={crypto.randomUUID()}></p>
			))}
		</div>
	);
}

export default GuessResult;
