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

	// 4. done... but how do we show the guess AND the grid at the same time

	// OPTION 2
	// 1. check if the guessList is empty
	// 2. if guessList is empty show the whole grid
	// 3. if guessList has an item... push the rest of the items as empty but iterable
	// 4. display the list, with a guess and empty ones that complete the amount of Game guess

	const arrDifference = numGuess - guessList.length;
	// OPTION 3
	// Thinking of another way to push new array to existing array is just to expand o replace, with a method

	// this Array constant gets the guessList expanded as the first item and the empty array list as second.. also expanden

	const newArr = [[...guessList], ...emptyStringArr];
	// console.log('guessList: ', [guessList]);
	console.log('newArr: ', newArr);

	// this fore removes the las items on the array acording to the difference in the guessList and empty Array
	for (let i = guessList.length - 1; i >= 0; i--) {
		newArr.pop();
	}

	// Compare the answers with game-helper
	// checkGuess(guessInput, sample);
	console.log('guessList: ', guessList);
	return (
		<div className='guess-results'>
			{/* si la diferencia NO es 6 mostrara el array con los vacios */}
			{range(6).map((word, index) => (
				<p className='guess' key={crypto.randomUUID()}>
					{range(5).map((letter, index) => (
						<span className='cell' key={crypto.randomUUID()}>
							{!guessList ? '' : [...guessList]}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default Guess;
