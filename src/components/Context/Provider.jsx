import React, { useState } from 'react'
import Context from './Context'

export default function Provider({ children }) {
  const [ nameList, setNameList ] = useState('');
  const [ inputTextArea, setInputTextArea] = useState('');

  const handleClick = () => {
    setNameList(catchNameList(inputTextArea))
  }

  const handleChange = ({ target: {value} }) => {
    setInputTextArea(value)
  }

  const catchNameList = (input) => {
    const reFindHour = /(<\s)?\d{1,2}\s(hours|horas|minutes|minutos)\s(ago|atrás)/i;
    const reFindEmoticons = /:.*:/g
    let lines = input.split('\n')
    const hasHour = lines.some((line) => reFindHour.test(line));
    lines = hasHour ? lines.filter((line) => reFindHour.test(line)) : lines;
    const uniqueUsers = lines
      .map((name) => name.replace(reFindHour, '')
      .replace(reFindEmoticons, '')
      .trim());

    return shuffle([...new Set(uniqueUsers)]).join('\n')
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  // Ref.: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array

  const context = {
    handleChange,
    catchNameList,
    handleClick,
    nameList,
  };

  return (
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  );
}
