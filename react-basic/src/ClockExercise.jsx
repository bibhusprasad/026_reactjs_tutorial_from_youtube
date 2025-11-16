import { useState } from "react";
import ClockDigital from "./ClockDigital";

function ClockExercise() {

  const [clockColor, setClockColor] = useState('green');

  return (
    <div>
      <h2>Digital Clock with change color</h2>
      <select onChange={event => setClockColor(event.target.value)} defaultValue={"green"}>
        <option value="green">Green</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="white">White</option>
      </select>

      <ClockDigital data={clockColor} />
    </div>
  )
}

export default ClockExercise;