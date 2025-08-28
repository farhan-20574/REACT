import './index.css'

const Todo = () => {
  return (
    <div className="todo-container">
      <form className="todo-form">
        <label htmlFor="task">Add a New Task</label>
        <input type="text" id="task" placeholder="What do you want to do" />
        <button type="submit">Submit</button>
      </form>

      <ul className="todo-list">
        <li>Go to gym</li>
        <li>Buy a new laptop</li>
        <li>Finish the React App</li>
      </ul>
    </div>
  )
}

export default Todo

//css
.todo-container {
  max-width: 500px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f8fafc;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: sans-serif;
}

.todo-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.todo-form label {
  font-weight: 600;
  color: #334155;
}

.todo-form input[type='text'] {
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s ease;
}

.todo-form input[type='text']:focus {
  border-color: #0ea5e9;
}

.todo-form button {
  background-color: #0ea5e9;
  color: white;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.todo-form button:hover {
  background-color: #0284c7;
}

.todo-list {
  list-style-type: none;
  padding-left: 0;
}

.todo-list li {
  background-color: #e2e8f0;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  margin-bottom: 0.75rem;
  color: #1e293b;
  font-weight: 500;
}


https://bait-us-salam-psdc.netlify.app/react/react-assignment-2

// code
import { useState, type ChangeEvent, type FormEvent } from 'react'
import './index.css'

const todos = [
  {
    title: 'Go to gym',
    completed: false,
    id: 1,
  },
]

const Todo = () => {
  const [task, setTask] = useState('')
  const [error, setError] = useState('')

  const [todos, setTodos] = useState([
    'Go to gym',
    'Buy a new laptop',
    'Finish the React App',
  ])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event?.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!task.trim()) {
      setError('please add some task')
      return
    }
    setTodos([...todos, task])
    setTask('')
    setError('')
  }

  const onDeleteTask = (text: string) => {
    const deleteTodo = todos.filter((todo) => todo !== text)

    setTodos(deleteTodo)
  }

  return (
    <div className="todo-container">
      <form className="todo-form" onSubmit={onSubmit}>
        <label htmlFor="task">Add a New Task</label>
        <input
          type="text"
          id="task"
          value={task}
          onChange={onChange}
          placeholder="What do you want to do"
        />
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>

      {todos.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li>
              {todo} <button onClick={() => onDeleteTask(todo)}>Delete</button>
              <button>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please add some task</p>
      )}
    </div>
  )
}

export default Todo