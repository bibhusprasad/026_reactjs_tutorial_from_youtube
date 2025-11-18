
import { useState } from "react";
import HookPropsCounter from "./HookPropsCounter"

function HookUseEffectProps() {

  const [counter, setCounter] = useState(0)
  const [data, setData] = useState(0)

  return (
    <div>
      <h2>Handle Props with useEffect </h2>
      <HookPropsCounter count={counter} data={data} />
      <button onClick={() => setCounter(counter + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </div>
  )
}

export default HookUseEffectProps;