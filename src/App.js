import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'

const App = () => {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    handleFilter()
  }, [todos, status])

  const handleFilter = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
    }
  }

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
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  )
}

export default App