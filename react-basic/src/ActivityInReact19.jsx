import { Activity } from "react";
import { useState } from "react";

function ActivityInReact19() {

  const [showHome, setShowHome] = useState(true)

  return (
    <div>
      <h2>Activity In React 19</h2>
      <button onClick={() => setShowHome(true)}>Home</button>
      <button onClick={() => setShowHome(false)}>User Home</button>
      <Activity mode={showHome == true ? 'visible' : 'hidden'}>
        <Home />
      </Activity>
      <Activity mode={showHome == false ? 'visible' : 'hidden'}>
        <UserHome />
      </Activity>
    </div>
  )
}

export default ActivityInReact19;

const Home = () => {
  return(
    <h2>Home Page</h2>
  )
}

const UserHome = () => {
  return(
    <div>
      <h2>User Home Page</h2>
      <input type="text" placeholder="Enter 1st value"></input><br/><br/>
      <input type="text" placeholder="Enter 1st value"></input><br/><br/>
      <input type="text" placeholder="Enter 1st value"></input><br/><br/>
    </div>
  )
}