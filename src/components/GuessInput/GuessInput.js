import { format } from 'prettier';
import React from 'react';

function GuessInput({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const nextGuesses = [...guesses];
    nextGuesses.push(guess);
    setGuesses(nextGuesses);
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        name='guess'
        id='guess-input'
        value={guess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
        pattern='[a-zA-Z]{5}'
        type='text'
        title='5 uppercase letters'
        required
      />
    </form>
  );
}

export default GuessInput;
