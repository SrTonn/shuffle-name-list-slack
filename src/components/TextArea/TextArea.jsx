import React from 'react'
import styles from './styles.module.css'

export default function TextArea({onChange, value, readOnly, placeholder}) {
  return (
    <label htmlFor="textarea">
      <p>Texto a ser limpo e ordenado aleatoriamente</p>
      <textarea
        rows={20}
        cols={40}
        id='textarea'
        placeholder={placeholder}
        className={ styles.TextArea}
        onChange={onChange ? onChange : null}
        value={value}
        readOnly={readOnly ? readOnly : null}
      ></textarea>
    </label>
  )
}
