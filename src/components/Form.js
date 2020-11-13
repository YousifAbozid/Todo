import React from 'react'

const Form = ({ input, setInput, todos, setTodos, setStatus }) => {

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodos([...todos, {
            text: input,
            completed: false,
            id: Math.floor(Math.random() * 10000)
        }])
        setInput('')
    }

    const handleStatus = (event) => {
        setStatus(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                className="todo-input"
            />
            <button className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={handleStatus} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form