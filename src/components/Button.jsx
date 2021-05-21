import React from 'react';

function Button({label='Click me'}) {
  return (
    <button className='btn btn--secondary'>{label}</button>
  );
}

export default Button;