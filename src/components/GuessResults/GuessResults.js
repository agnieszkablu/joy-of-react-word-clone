import React from 'react';

function GuessResults({ guesses }) {

  return (
    <div className='guess-results'>
      {guesses.map((guess, index) => {
        return (
          <p key={`guess-` + index} className='guess'>
            {guess}
          </p>
        );
      })}
    </div>
  );
}

export default GuessResults;
