import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import Banner from '../Banner';
import Keyboard from '../Keyboard';

function Game() {
  // Pick a random word on every pageload.

  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');

  console.info({ answer });

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

  function handleReset() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  return (
    <>
      <GuessResults answer={answer} guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        isDisabled={gameStatus !== 'running'}
      />

      <Keyboard answer={answer} guesses={guesses} />

      {gameStatus === 'won' && (
        <Banner className='happy'>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>{guesses.length} guesses</strong>.
          <button className='button-reset' onClick={handleReset}>Reset</button>
        </Banner>
      )}
      {gameStatus === 'lost' && (
        <Banner className='sad'>
          Sorry, the correct answer is <strong>{answer}</strong>.
          <button className='button-reset' onClick={handleReset}>Reset</button>
        </Banner>
      )}
    </>
  );
}

export default Game;
