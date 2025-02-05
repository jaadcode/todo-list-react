import { useState } from "react"

const useTodo = () => {
  const [todo, setTodo] = useState([]);

  const addTask = (input) => {
    setTodo([...todo, {
      id: Date.now(),
      name: input,
      checked: false
    }])
    console.log(todo)
  }

  return {
    todo, addTask
  }

}

export default useTodo