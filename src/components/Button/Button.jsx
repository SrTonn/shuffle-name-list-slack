import React from 'react';

export default function Button({handleClick, className}) {
  return (
    <button
      className={className}
      onClick={handleClick}
    >
      Misturar
    </button>
  )
}
