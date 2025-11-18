
import { useEffect, useState } from "react";

function HookUseEffect1() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    callOnce();
  }, [])

  function callOnce() {
    console.log("callOnce function called")
  }


  useEffect(() => {
    callCounter();
  }, [counter])

  function callCounter() {
    console.log("Counter : ", counter)
  }


  useEffect(() => {
    callData();
  }, [data])

  function callData() {
    console.log("Data : ", data)
  }


  useEffect(() => {
    callTotal();
  }, [counter, data])

  function callTotal() {
    setTotal(total+1)
    console.log("Total Clicked : ", total)
  }


  return (
    <div>
      <h2>Before using hook useEffect</h2>
      <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={() => setData(data + 1)}>Data {data}</button>
    </div>
  )
}

export default HookUseEffect1;