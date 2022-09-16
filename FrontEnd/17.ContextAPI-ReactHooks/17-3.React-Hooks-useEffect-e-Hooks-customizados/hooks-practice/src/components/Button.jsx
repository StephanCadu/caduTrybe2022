import React from "react";

export default function Button({ text, handleClick }) {
  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      { text }
    </button>
  )
}