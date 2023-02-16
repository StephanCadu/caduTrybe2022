import React, { useContext } from "react";
import TodosContext from "../context/TodosContext";

export default function TodoList() {
  const { value } = useContext(TodosContext);

  return (
    <ul>
      { value.map((todo, index) => (
          <li key={ index }>
            { todo }
          </li>
        )) }
    </ul>
  )
}