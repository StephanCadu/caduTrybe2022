import React from 'react';

export default function Input({ value, handleChange, name, label }) {
  return (
    <label htmlFor={ name }>
      { label }
      <input
        id={ name }
        type="text"
        value={ value }
        onChange={ handleChange }
      />
    </label>
  )
}