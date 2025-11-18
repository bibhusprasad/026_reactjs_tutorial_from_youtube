import { useEffect } from "react";

function HookLifeCycleCounter({ count }) {

  useEffect(() => {
    console.log("mounting part : called once")
  },[])

  useEffect(() => {
    console.log("updating part : called more than once")
  }, [count])

  //unmount basically rerender the page like show and hide that component
  useEffect(() => {
    return() => {
      console.log("unmount part : called once")
    }
  }, [])

  useEffect(() => {
    console.log("run on every life cycle event")
  })

  return (
    <div>
      <h2>Life Cycle Counter Component</h2>
      <h3>Counter value {count}</h3>
    </div>
  )
}

export default HookLifeCycleCounter;