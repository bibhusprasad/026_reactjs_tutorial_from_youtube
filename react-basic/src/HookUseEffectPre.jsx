import { useState } from "react";

function HookUseEffectPre() {

  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);

  function callOnce() {
    console.log("callOnce function called")
  }

  callOnce();

  return(
    <div>
      <h2>Hook useEffect demo</h2>
      <button onClick={()=>setCounter(counter + 1)}>Counter {counter}</button>
      <button onClick={()=>setData(data + 1)}>Data {data}</button>
    </div>
  )
}

export default HookUseEffectPre;