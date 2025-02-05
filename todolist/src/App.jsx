import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style/App.css'
import TodoForm from './components/TodoForm'
import useTodo from './hooks/useTodo'

const App = () => {
  const {todo, addTask} = useTodo()
  return (
    <>
      <h1>To eat list</h1>
      <TodoForm exportInput={addTask} />
    </>
  )
}

export default App
