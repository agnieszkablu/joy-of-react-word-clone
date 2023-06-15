import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers.js';

// In the result Josh is using the separate component Cell 
// https://github.com/joy-of-react/word-clone/commit/7afdb36ca5a77544b14d61ea347b094352e47818

function Guess({ guess, answer }) {
  const checkedGuess = checkGuess(guess, answer);
  return (
    <p className='guess'>
      {range(5).map((index) => {
        return (
          <span
            key={index}
            className={
              guess !== undefined ? `cell ${checkedGuess[index].status}` : 'cell'
            }
          >
            {guess !== undefined && [...guess][index]}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
