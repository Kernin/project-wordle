import React from 'react';
import Guess from '../Guess/Guess';
import utils from '../../utils';

function GuessResult({ guess = '', guessList = [] }) {
	// Split guess into letters to make an array and save it to guessList
	const lettersWithStatus = guess.split('').map((letter, index) => ({
		letter,
		status: guessList[index] || 'empty', // Default to "empty" if no status
	}));

	return (
		<div className='guess-row'>
			{lettersWithStatus.map(({ letter, status }, index) => (
				<p className='guess' key={crypto.randomUUID()}>
					<span key={index} className={`letter-box ${status}`}>
						{letter}
					</span>
				</p>
			))}
		</div>
	);
}

export default GuessResult;
