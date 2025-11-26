import { useEffect, useState } from "react";
import DisplayJsonServerUserData from "./DisplayJsonServerUserData";

function UserData() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserDataFromJsonServer();
  }, [])

  // async function getUserData() {
  //   const url = 'https://dummyjson.com/users';
  //   let response = await fetch(url);
  //   response = await response.json();
  //   setUserData(response.users)
  // }

  async function getUserDataFromJsonServer() {
    const url = 'http://localhost:3000/users';
    let response = await fetch(url);
    response = await response.json();
    console.log(response)
    setUserData(response)
  }

  console.log(userData)

  return (
    <div>
      <DisplayJsonServerUserData details={userData} />
    </div>
  )
}

export default UserData;