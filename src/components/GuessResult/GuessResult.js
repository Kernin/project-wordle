import React from 'react';

function GuessResult({ guessList }) {
	return (
		<div className='guess-results'>
			{guessList.map((guessItem) => (
				<p className='guess' key={crypto.randomUUID()}>
					{[...guessItem]}
				</p>
			))}
		</div>
	);
}

export default GuessResult;
