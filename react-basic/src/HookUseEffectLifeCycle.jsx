
import { useState } from "react";
import HookLifeCycleCounter from "./HookLifeCycleCounter"

function HookUseEffectLifeCycle() {

  const [counter, setCounter] = useState(0)
  const [display, setDisplay] = useState(true)

  return (
    <div>
      <h2>Handle React Life Cycle with useEffect </h2>
      {
        display ? <HookLifeCycleCounter count={counter} /> : null
      }
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setDisplay(!display)}>Toggle</button>
    </div>
  )
}

export default HookUseEffectLifeCycle;