import { useState } from "react";

function DrivedState() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleAddUsers = () => {
    setUsers([...users, user])
    console.log(users)
  }

  return (
    <div>
      <h2>Drived State in React JS</h2>
      <div>
        <h3>Total User : {users.length} </h3>
        <h3>Last User : {users[users.length - 1]}</h3>
        <h3>Unique User : {[...new Set(users)].length}</h3>
      </div>
      <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="add new user name"></input>
      <button onClick={handleAddUsers}>Add user</button>
      {
        users.map((item, index) => (
          <h4 key={index}>{item}</h4>
        ))
      }
    </div>
  )
}

export default DrivedState;