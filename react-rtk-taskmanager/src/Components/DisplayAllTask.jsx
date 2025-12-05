import { useSelector } from "react-redux";
import '../css/displayTask.css';
import TaskItem from "./TaskItem";
import FilterTask from "./FilterTask";

function DisplayAllTask() {

  //task is there inside store.js. name should be match
  const { items, filters } = useSelector(state => state.task)

  const filter = useSelector(state => state.task.filters)

  console.log(items);

  return (
    <div>
      <FilterTask />
      <div className="task-list">
        {
          items
            .filter(item =>
              filter === "completed" ? item.completed === true : true
            )
            .map(item => (
              <TaskItem key={item.id} task={item} />
            ))
        }
      </div>
    </div>
  )
}

export default DisplayAllTask;