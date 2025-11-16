
import { useState } from "react";

function ControlComponent() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Control Component in React</h2>
      <form action="" method="get">
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}></input><br /><br />
        <input type="text" value={password} onChange={(event) => setPassword(event.target.value)}></input><br /><br />
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}></input><br /><br />
        <button onClick={() => { setName(""); setPassword(""); setEmail("") }}>Clear</button>
        <h2>{name}</h2>
        <h2>{password}</h2>
        <h2>{email}</h2>
      </form>
    </div>
  )
}

export default ControlComponent;