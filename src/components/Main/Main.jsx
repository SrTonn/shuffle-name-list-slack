import React, { useContext } from 'react'
import Button from '../Button/Button'
import Context from '../Context/Context';
import TextArea from '../TextArea/TextArea'
import styles from './styles.module.css'

export default function Main() {
  const { handleChange, handleClick, input, nameList } = useContext(Context);
  return (
    <main className={ styles.Main }>
      <TextArea
        onChange={handleChange}
        value={input}
        placeholder='Cole as informações aqui.'
      />
      <Button
        handleClick={handleClick}
      />
      <TextArea
        value={nameList}
        readOnly
      />
    </main>
  );
}
