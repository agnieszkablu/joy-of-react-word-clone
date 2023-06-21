import React from 'react';
import { KEYBOARDKEYS } from '../../data';
import { checkGuess } from '../../game-helpers.js';

function getStatusByLetter(guesses) {
  const statusObj = {};

  guesses.forEach((guess) => {
    guess.forEach(({ letter, status }) => {
      statusObj[letter] = status;
    });
  });

  return statusObj;
}

function Keyboard({ guesses, answer }) {
  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer));

  let statusByLetter = getStatusByLetter(validatedGuesses);

  return (
    <div className='keyboard-wrapper'>
      {KEYBOARDKEYS.map((nested, index) => {
        return (
          <div key={index} className='keyboard-row'>
            {nested.map((letter) => {
              return (
                <div key={letter} className={`key ${statusByLetter[letter.toUpperCase()] || ''}`}>{letter.toUpperCase()}</div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
