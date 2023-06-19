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

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} isDisabled={guesses.includes(answer) || guesses.length > 5} />
      {guesses.includes(answer) && (
        <Banner className='happy'>
          <strong>Congratulations!</strong> Got it in {}
          <strong>{guesses.length} guesses</strong>.
        </Banner>
      )}
      {guesses.length > 5 && (
        <Banner className='sad'>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </Banner>
      )}
    </>
  );
}

export default Game;
