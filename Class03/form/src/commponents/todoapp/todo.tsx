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