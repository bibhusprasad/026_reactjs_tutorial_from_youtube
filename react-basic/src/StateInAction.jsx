
import { useState } from "react";
import Counter from "./Counter";

function StateInAction() {

  //fruit is a state variable
  //setFruit is a function to update the state variable
  const [fruit, setFruit] = useState("Apple");

  const handleFruit = () => {
    setFruit("Mango");
  }

  return (
    <div>
      <h2>React State in Action</h2>
      <h3>{fruit}</h3>
      <button onClick={handleFruit}>Change Fruit</button>
      <Counter />
    </div>
  )
}

export default StateInAction;