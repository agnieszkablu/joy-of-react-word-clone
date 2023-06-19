import { format } from 'prettier';
import React from 'react';

function GuessInput({ handleSubmitGuess, isDisabled }) {
  //tentative means temporary
  const [tentativeGuess, setTentativeGuess] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter Guess:</label>
      <input
        name='guess'
        id='guess-input'
        value={tentativeGuess}
        onChange={(e) => {
          const nextGuess = e.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        pattern='[a-zA-Z]{5}'
        type='text'
        title='5 uppercase letters'
        required
        disabled={isDisabled}
      />
    </form>
  );
}

export default GuessInput;
