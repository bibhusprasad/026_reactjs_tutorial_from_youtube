import { useDispatch } from 'react-redux';
import '../css/displayTask.css';
import { toggleTask } from '../features/task/taskSlice'

function TaskItem({ task }) {

  const dispatch = useDispatch()

  return (
    <div className="task-item">
      <span className={`task-text ${task.completed ? "done" : ""}`}>
        {task.text}
      </span>
      <div className="task-buttons">
        <button className={`${task.completed ? "undo-btn" : "done-btn"}`} onClick={() => dispatch(toggleTask(`${task.id}`))}>{task.completed ? "Undo" : "Done"}</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  )
}

export default TaskItem;