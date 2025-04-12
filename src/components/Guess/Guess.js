import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({ guessWord }) {
	const separatedGuess = guessWord.toString().split('');

	return (
		<>
			{range(NUM_OF_GUESSES_ALLOWED).map((guess) => (
				<span className='cell' key={crypto.randomUUID()}>
					{separatedGuess[guess]}
					{/* {console.log('separated', guessWord.toString().split(''))} */}
				</span>
			))}
		</>
	);
}

export default Guess;
