import { useEffect } from "react";

function HookPropsCounter({ count, data }) {

  useEffect(() => {
    handleCounter();
  }, [count])

  const handleCounter = () => {
    console.log("handleCounter called")
  }

  useEffect(() => {
    handleData();
  }, [data])

  const handleData = () => {
    console.log("handleData called")
  }

  return (
    <div>
      <h2>Props Counter Component</h2>
      <h3>Counter value {count}</h3>
      <h3>Data value {data}</h3>
    </div>
  )
}

export default HookPropsCounter;