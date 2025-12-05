import { useSelector } from "react-redux";
import '../css/displayTask.css';
import TaskItem from "./TaskItem";
import { useState } from "react";

function DisplayAllTask() {

  const [active, setActive] = useState("all");

  //task is there inside store.js. name should be match
  const { items, filters } = useSelector(state => state.task)
  console.log(items);

  return (
    <div>
      <div className="task-list">
        {
          items.map((item) => (
            <TaskItem key={item.id} task={item} />
          ))
        }
      </div>
    </div>
  )
}

export default DisplayAllTask;