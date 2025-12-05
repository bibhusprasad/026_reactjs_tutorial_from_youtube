import { useSelector } from "react-redux";
import '../css/displayTask.css';
import TaskItem from "./TaskItem";
import FilterTask from "./FilterTask";

function DisplayAllTask() {

  //task is there inside store.js. name should be match
  const { items, filters } = useSelector(state => state.task)

  const filtered =
    filters === "completed"
      ? items.filter(item => item.completed)
      : filters === "remaining"
      ? items.filter(item => !item.completed)
      : items; // show all

  console.log(items);

  return (
    <div>
      <FilterTask />
      <div className="task-list">
        {
          filtered.map(item => (
            <TaskItem key={item.id} task={item} />
          ))
        }
      </div>
    </div>
  )
}

export default DisplayAllTask;