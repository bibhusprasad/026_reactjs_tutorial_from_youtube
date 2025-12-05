import { useState } from 'react';
import '../css/addTask.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/task/taskSlice'

function AddTask() {

  //to call reducer from a component
  const dispatch = useDispatch()

  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTask(text))
    setText('')
  }

  return (
    <div className="task-wrapper">
      <h2 className="title">My Task Manager</h2>

      <form className="task-input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          className="task-input"
          placeholder="Enter your task..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  )
}

export default AddTask;