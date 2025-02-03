import { useState } from 'react'

const TodoList = () => {
  const todos = ["My first todo", "My second todo"];
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <input type="checkbox" /> {todo}
        </li>
      ))}
    </ul>
  );
}

export default TodoList