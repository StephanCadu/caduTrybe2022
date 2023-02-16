import { useContext } from "react";
import { useState } from "react";
import TodosContext from "../context/TodosContext";
import Button from "./Button";
import Input from "./Input";
import TodoList from "./TodoList";

export default function Todos() {
  const [todo, setTodo] = useState('');
  const [todoIndex, setTodoIndex] = useState(0);
  const { add, clear, removeIndex } = useContext(TodosContext);

  return (
    <div>
      <Input
        value={todo}
        handleChange={(e) => setTodo(e.target.value)}
        label="Todo name:"
        name="add-input"
      />
      <Button text="Add Todo" handleClick={() => add(todo)}/>
      <Input
        value={todoIndex}
        handleChange={(e) => setTodoIndex(e.target.value)}
        label="Remove by index:"
        name="remove-input"
      />
      <Button text="Remove Todo" handleClick={() => removeIndex(todoIndex)}/>
      <Button text="Clear all" handleClick={clear}/>

      <TodoList />
    </div>
  );
}