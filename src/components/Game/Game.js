import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  function handleSubmitGuess(guess) {
    //use nextGuesses so react app knows that the component changed and needs rerender
    // that way NUM_OF_GUESSES_ALLOWED will be equal to the final nextGuesses.length
    const nextGuesses = [...guesses, guess];

    // used guess.toUpperCase() to prevent some possible bugs
    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isDisabled={gameStatus !== 'running'}
      />
      <Keyboard />

      {gameStatus === 'won' && (
        <Banner className='happy'>
          <strong>Congratulations!</strong> Got it in{' '}
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
