import { useEffect } from "react";
import { useEffectEvent } from "react";
import { useState } from "react";

function HookUseEffectEventReact19() {

  const [count, setCount] = useState(0);

  const countControl = useEffectEvent(() => {
    setCount(count + 1)
  })

  useEffect(() => {
    const interval = setInterval(() => {
      countControl()
    }, 1000)
    console.log(interval)
  }, [])

  return (
    <div>
      <h2>Hook Use Effect Event in React 19</h2>
      <h2>{count}</h2>
    </div>
  )
}

export default HookUseEffectEventReact19;