import React from 'react';
import TodosContext from './TodosContext';
import { useArray } from "react-hanger";

export default function TodosProvider({ children }) {
  const { add, clear, value, removeIndex } = useArray([
    'estudar hooks',
    'fazer projetos em hooks'
  ]);

  const context = {
    value,
    add,
    clear,
    removeIndex,
  }

  return (
    <TodosContext.Provider value={ context }>
      { children }
    </TodosContext.Provider>
  )
}
