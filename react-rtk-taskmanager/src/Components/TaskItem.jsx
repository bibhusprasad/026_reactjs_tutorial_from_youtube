import '../css/displayTask.css';

function TaskItem({ task }) {
  return (
    <div className="task-item">
      <span className="task-text">{task.text}</span>
      <div className="task-buttons">
        <button className="done-btn">Done</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  )
}

export default TaskItem;