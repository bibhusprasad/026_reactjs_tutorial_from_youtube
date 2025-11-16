
import { useState } from "react";

function MulConditions() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Multiple Conditions in React</h2>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      {
        count == 0 ? <h2>Condition 0</h2>
          : count == 1 ? <h2>Condition 1</h2>
            : count == 2 ? <h2>Condition 2</h2>
              : count == 3 ? <h2>Condition 3</h2>
                : <h2>Other Condition</h2>
      }
    </div>
  )
}

export default MulConditions;