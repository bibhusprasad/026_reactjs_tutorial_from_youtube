

import { useState } from "react";

function Counter() {
  
  //count is a state variable
  //setCount is a function to update the state variable
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

    return (
        <div>
          <h2>Counter : {count}</h2>
          <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;