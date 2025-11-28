import { useEffect } from "react";
import { useState } from "react";

function HookUseOptimistic() {

  const [skills, setSkills] = useState([]);
  const [name, setName] = useState([]);

  useEffect(() => {
    getSkills()
  }, []);

  const getSkills = async () => {
    let resp = await fetch('http://localhost:3000/skills');
    resp = await resp.json();
    setSkills(resp)
  }

  const addSkill = async (event) => {
    const id = Math.random() * 100000
    let resp = await fetch('http://localhost:3000/skills', {
      method: 'post',
      body: JSON.stringify({ name, id })
    });

    resp = await resp.json();

    if (resp) {
      getSkills()
    }
  }

  return (
    <div>
      <h2>use Optimistic hook in React 19</h2>
      <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter skill"></input><br />
      <button onClick={addSkill}>Add</button>
      {
        skills.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))
      }
    </div>
  )
}

export default HookUseOptimistic;