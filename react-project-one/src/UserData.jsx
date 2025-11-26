import { useEffect, useState } from "react";
import DisplayUserDataBasic from "./DisplayUserDataBasic";

function UserData() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserData();
  }, [])

  async function getUserData() {
    const url = 'https://dummyjson.com/users';
    let response = await fetch(url);
    response = await response.json();
    setUserData(response.users)
  }

  console.log(userData)

  return (
    <div>
      <DisplayUserDataBasic details={userData}/>
    </div>
  )
}

export default UserData;