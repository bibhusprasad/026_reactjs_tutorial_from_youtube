
import { useState } from "react";
import ContextApiCollege from "./ContextApiCollege";
import { SubjectContext } from "./ContextApiData";

function ContextApi() {

  const [subject, setSubject] = useState('English');

  return (
    <div style={{ backgroundColor: 'yellow', padding: '10px' }}>
      <h2>Context API</h2>

      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(event) => setSubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="Science">Science</option>
          <option value="Computer">Computer</option>
        </select>
        <button onClick={()=>setSubject('')}>Clear</button>
        <ContextApiCollege />
      </SubjectContext.Provider>

    </div>
  )
}

export default ContextApi;