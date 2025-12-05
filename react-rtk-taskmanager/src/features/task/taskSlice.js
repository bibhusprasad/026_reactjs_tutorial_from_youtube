import { createSlice, nanoid } from '@reduxjs/toolkit'

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    filters: 'all'
  },
  // Reducer hold the logic of add, remove, toggle, filter task
  // Action: all the name (addTask, toggleTask, deleteTask, setFilter) is called Action
  reducers: { //reducers is collection of all Action
    addTask: {
      reducer: (state, action) => {
        state.items.push(action.payload) //action.payload hold the task value
      },
      //customized payload. when 1 task added we add some extra data with that item like id, complete or not.
      prepare: (text) => {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false
          }
        }
      }
    },
    toggleTask: (state, action) => {
      const task = state.items.find(t => t.id === action.payload)
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(t => t.id !== action.payload)
    },
    setFilter: (state, action) => {
      state.filters = action.payload
    }
  }
})

export const {addTask, toggleTask, deleteTask, setFilter} = taskSlice.actions;
export default taskSlice.reducer;