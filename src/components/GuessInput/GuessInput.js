import { format } from 'prettier';
import React from 'react';

function runGuess(guess) {
  console.info({ guess });
}

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(e) => {
        e.preventDefault();
        runGuess(guess);
        setGuess('');
      }}
    >
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        name='guess'
        id='guess-input'
        value={guess.toUpperCase()}
        onChange={(e) => {
          setGuess(e.target.value);
        }}
        pattern='\w{5}'
        type='text'
        title="5 uppercase letters" 
      />
    </form>
  );
}

export default GuessInput;
