import { useReducer } from "react"

const emptyData = {
  name: '',
  password: '',
  age: '',
  city: '',
  email: ''
}

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val }
}

function HookUseReducer() {

  const [state, dispatch] = useReducer(reducer, emptyData);

  console.log(state)

  return (
    <div>
      <h2>useReducer Hook in React Js</h2>
      <form action="">
        Name: <input type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'name' })} placeholder="Enter name"></input><br /><br />
        Password: <input type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'password' })} placeholder="Enter password"></input><br /><br />
        Age: <input type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'age' })} placeholder="Enter age"></input><br /><br />
        City: <input type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'city' })} placeholder="Enter city"></input><br /><br />
        Email: <input type="text" onChange={(event) => dispatch({ val: event.target.value, type: 'email' })} placeholder="Enter email"></input><br /><br />
        <button>Login</button>
      </form>
      <ul>
        <li>Name: {state.name}</li>
        <li>Password: {state.password}</li>
        <li>Age: {state.age}</li>
        <li>City: {state.city}</li>
        <li>Email: {state.email}</li>
      </ul>
    </div>
  )
}

export default HookUseReducer;