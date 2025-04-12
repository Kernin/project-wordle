import React from 'react';
import { range } from '../../utils';
import Guess from '../Guess';

function GuessResult({ guessOption }) {
	console.log('guessOption ', guessOption);
	return (
		<div className='guess-results'>
			{range(5).map((i) => (
				<p className='guess' key={crypto.randomUUID()}>
					<Guess guessWord={guessOption[i]}></Guess>
				</p>
			))}
		</div>
	);
}

export default GuessResult;
