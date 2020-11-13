import React from 'react'

const Todo = ({ todo, todos, setTodos }) => {
    const handleDelete = () => {
        setTodos(todos.filter(object => object.id !== todo.id ))
    }

    const handleComplete = () => {
        setTodos(todos.map((object) => {
            if (object.id === todo.id) {
                return {
                    ...object, completed: !object.completed
                }
            }
            return object
        }))
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {todo.text}
            </li>
            <button onClick={handleComplete} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={handleDelete} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo