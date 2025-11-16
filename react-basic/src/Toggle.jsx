
import { useState } from "react";

function Toggle() {

  const [display, setDisplay] = useState(true);

  const showUserName = () => {
    setDisplay(!display)
  }

  return (
    <div>
      <h2>Toggle or Hide and Show in React</h2>
      <h2>Toggle in React</h2>
      <button onClick={showUserName}>Show/Hide</button>
      {
        display ? <h2>Bibhu Samal</h2> : null
      }
      {
        !display ? <User /> : null
      }
    </div>
  )
}

export function User() {
  return (
    <div>
      <h2>Details From User Component</h2>
    </div>
  )
}

export default Toggle;