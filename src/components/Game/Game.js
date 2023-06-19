import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  let gameStatus = 'running';
  if (guesses.includes(answer)) {
    gameStatus = 'won';
  } else if (guesses.length > 5) {
    gameStatus = 'lost';
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isDisabled={gameStatus !== 'running'}
      />
      {gameStatus === 'won' && (
        <Banner className='happy'>
          <strong>Congratulations!</strong> Got it in {}
          <strong>{guesses.length} guesses</strong>.
        </Banner>
      )}
      {gameStatus === 'lost' && (
        <Banner className='sad'>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner>
      )}
    </>
  );
}

export default Game;
