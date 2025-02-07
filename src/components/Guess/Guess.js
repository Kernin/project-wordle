import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { range } from '../../utils';

function Guess({ guessInput = '', guessList, setGuessList }) {
	const numGuess = NUM_OF_GUESSES_ALLOWED;

	const emptyStringArr = [
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	];
	// console.log('guess list: ', guessList);

	// 1. separate guess into letters to map over
	// 2. check if the guessList is empty and map over to show grid
	// 3. if the guessList has an item map over it and print it on spans (the letters)

	// 4. done... but how do we show the guess AND the grid at the same time

	// OPTION 2
	// 1. check if the guessList is empty
	// 2. if guessList is empty show the whole grid
	// 3. if guessList has an item... push the rest of the items as empty but iterable
	// 4. display the list, with a guess and empty ones that complete the amount of Game guess

	const arrDifference = numGuess - guessList.length;

	// Thinking of another way to push new array to existing array is just to expand o replace, with a method

	const newArr = [...guessList, ...emptyStringArr];

	for (let i = guessList.length - 1; i >= 0; i--) {
		newArr.pop();
	}

	return (
		<div className='guess-results'>
			{/* si la diferencia NO es 6 mostrara el array con los vacios */}
			{newArr.map((word, index) => (
				<p className='guess' key={crypto.randomUUID()}>
					{range(5).map((letter, index) => (
						<span className='cell' key={crypto.randomUUID()}>
							{word[index]}
						</span>
					))}
				</p>
			))}
		</div>
	);
}

export default Guess;
