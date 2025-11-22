import { useState } from "react";
import LiftingStateDisplay from "./LiftingStateDisplay";
import LiftingStateUser from "./LiftingStateUser";

function LiftingStateUp() {

  const [user, setUser] = useState('');

  return (
    <div>
      <h2>Lifting State Up in React - Parent Component</h2>
      <LiftingStateUser setUser={setUser} />
      <hr />
      <LiftingStateDisplay user={user} />
    </div>
  )
}

export default LiftingStateUp;