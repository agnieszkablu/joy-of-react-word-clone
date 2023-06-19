import React from 'react';
import { KEYBOARDKEYS } from '../../data';

function Keyboard() {
  return (
    <div className='keyboard-wrapper'>
      {KEYBOARDKEYS.map((nested, index) => {
        return (
          <div key={index} className='keyboard-row'>
            {nested.map((element, index) => {
              return (
                <div key={index} className='key'>
                  {element.toUpperCase()}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
