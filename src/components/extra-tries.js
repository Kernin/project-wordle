// this one worked but the thing broke when it reached all guess

{
	arrDifference !== 6 && arrDifference > 0
		? newArr.map((word, index) => (
				<p className='guess' key={crypto.randomUUID()}>
					{range(5).map((letter, index) => (
						<span className='cell' key={crypto.randomUUID()}>
							{word[index]}
						</span>
					))}
				</p>
		  ))
		: range(arrDifference).map((word, index) => (
				<p className='guess' key={crypto.randomUUID()}>
					{range(5).map((letter, index) => (
						<span className='cell' key={crypto.randomUUID()}>
							{''}
						</span>
					))}
				</p>
		  ));
}

// SECOND version that works but its complicated

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

// this Array constant gets the guessList expanded as the first item and the empty array list as second.. also expanden

const newArr = [[...guessList], ...emptyStringArr];
// console.log('guessList: ', [guessList]);
console.log('newArr: ', newArr);

// this fore removes the las items on the array acording to the difference in the guessList and empty Array
for (let i = guessList.length - 1; i >= 0; i--) {
	newArr.pop();
}

<div className='guess-results'>
	{/* si la diferencia NO es 6 mostrara el array con los vacios */}
	{newArr.map((word, validation, index) => (
		<p className='guess' key={crypto.randomUUID()}>
			{range(5).map((letter, index) => (
				// compare letters gues with letter answer and display a className accordinglly

				<span className='cell' key={crypto.randomUUID()}>
					{validation[index]}
				</span>
			))}
		</p>
	))}
</div>;
