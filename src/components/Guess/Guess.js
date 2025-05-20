import React from 'react';
import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';
import Cell from '../../components/Cell';

function Guess({ guessWord, answer }) {
	//CHEAT ANSWER
	// create a component, in this case it declared inside this one component, which is bad practice

	// function Cell({ letter, status }) {
	// 	return <span className={`cell ${status}`}>{letter}</span>;
	// }

	// this separates the array of the answer after turning it to string
	const results = checkGuess(guessWord, answer);

	return (
		<p className='guess'>
			{range(5).map((guess) => (
				<Cell
					key={guess}
					letter={results ? results[guess].letter : undefined}
					status={results ? results[guess].status : undefined}
				/>
			))}
		</p>
	);
}

export default Guess;
