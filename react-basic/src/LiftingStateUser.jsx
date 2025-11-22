
function LiftingStateUser({setUser}){
  return(
    <div>
      <h3>Lifting State User Child Component</h3>
      <input type="text" onChange={(event) => setUser(event.target.value)} placeholder="Add user name"></input>
    </div>
  )
}

export default LiftingStateUser;