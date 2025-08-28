import { useState, type ChangeEvent, type FormEvent } from 'react'
import './index.css'



const Todo = () => {

  const [task, setTask] = useState('')
  const [todos, setTodos] = useState([
    'Go to gym',
    'Buy a new laptop',
    'Finish the React App'
  ])


  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event?.target.value)
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!task.trim()) {
      return
    }
    setTodos([...todos, task])
    setTask('')
  }

  const onDeleteTask = (text: string) => {
    const deleteTodo = todos.filter((todo) => todo !== text)
    setTodos(deleteTodo)
  }

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
        placeholder="What do you want to do" />
      <button type="submit">Submit</button>
    </form>

    {todos.length > 0 ? (
      <ul className="todo-list">
        {todos.map((todo) => (
          <li>
            {todo}<button onClick={() => onDeleteTask(todo)}>Delete</button>
          </li>
        ))}
      </ul>
  </div>): (
  <p>Please add some task</p>
)
   
  )
}

export default Todo