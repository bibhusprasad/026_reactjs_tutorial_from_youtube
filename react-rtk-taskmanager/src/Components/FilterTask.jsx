
import '../css/filterTask.css';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from '../features/task/taskSlice'

function FilterTask() {

  const filter = useSelector(state => state.task.filters)
  console.log(filter)
  const dispatch = useDispatch();

  return (
    <div className="filter-buttons">
      <button
        className={`filter-btn ${filter === "all" ? "active-all" : ""}`}
        onClick={() => dispatch(setFilter("all"))}
      >
        All
      </button>

      <button
        className={`filter-btn ${filter === "completed" ? "active-complete" : ""}`}
        onClick={() => dispatch(setFilter("completed"))}
      >
        Completed
      </button>

      <button
        className={`filter-btn ${filter === "remaining" ? "active-remaining" : ""}`}
        onClick={() => dispatch(setFilter("remaining"))}
      >
        Remaining
      </button>

    </div>
  )
}

export default FilterTask;