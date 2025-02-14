import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guessInput = '', guessList, setGuessList, sample }) {
	const numGuess = NUM_OF_GUESSES_ALLOWED;

	const emptyStringArr = [
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	];

	// the answer separated to letters, but maybe we dont need it b/c we have the CheckGuess
	const sampleSplit = sample.split('');

	const arrDifference = numGuess - guessList.length;

	// OPTION 3
	// Thinking of another way to push new array to existing array is just to expand o replace, with a method

	// this Array constant gets the guessList expanded as the first item and the empty array list as second.. also expanden

	const newArr = [...guessList, ...emptyStringArr];
	// console.log('guessList: ', [guessList]);
	// console.log('newArr: ', newArr);

	// this fore removes the las items on the array acording to the difference in the guessList and empty Array
	for (let i = guessList.length - 1; i >= 0; i--) {
		newArr.pop();
	}

	// Compare the answers with game-helper
	// checkGuess(guessInput, sample);
	console.log('guessList: ', guessList);
	return (
		<div className='guess-results'>
			{newArr.map((word) => (
				<p className='guess' key={crypto.randomUUID()}>
					{word.map((letter, index) => (
						<span className='cell' key={crypto.randomUUID()}>
							{guessList.length > 0 && guessList.length < 7 ? word[index] : ''}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default Guess;
