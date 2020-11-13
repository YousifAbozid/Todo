import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>💖 Yousif's Todo List 💖</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        input={input}
        setInput={setInput}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App