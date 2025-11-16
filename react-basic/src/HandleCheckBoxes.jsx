
import { useState } from "react";

function HandleCheckBoxes() {

  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value])
    } else {
      setSkills([...skills.filter(item => item != event.target.value)])
    }
  };

  return (
    <div>
      <h2>Handle Check Box in React</h2>

      <h3>Select your skills</h3>
      <input onChange={handleSkills} type="checkbox" id="java" value="java" />
      <label htmlFor="java">JAVA</label><br /><br />

      <input onChange={handleSkills} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label><br /><br />

      <input onChange={handleSkills} type="checkbox" id="c" value="c" />
      <label htmlFor="c">C</label><br /><br />

      <input onChange={handleSkills} type="checkbox" id="js" value="js" />
      <label htmlFor="js">JS</label><br /><br />

      <h3>Selected Skills : {skills.toString()}</h3>

    </div>
  )
}

export default HandleCheckBoxes;