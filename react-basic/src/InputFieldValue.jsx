
import { useState } from "react";

function InputFieldValue() {

  const [val, setVal] = useState("")

  return (
    <div>
      <h2>Get Input Field Value</h2>
      <input type="text" value={val} onChange={(event) => { setVal(event.target.value) }} 
              placeholder="Enter user name"></input>
      <h2>{val}</h2>
      <button onClick={() => setVal("")}>Clear</button>
    </div>
  )
}

export default InputFieldValue;