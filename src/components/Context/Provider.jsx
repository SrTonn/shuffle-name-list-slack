import React from 'react'
import Context from './Context'

export default function Provider({ children }) {
  const context = {};

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}
