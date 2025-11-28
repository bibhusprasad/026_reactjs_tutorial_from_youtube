import { useEffect, useState } from "react";
import DisplayJsonServerUserData from "./DisplayJsonServerUserData";
import { useNavigate } from "react-router";

function UserData() {

  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

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

  const handleDeleteClick = async (userId) => {
    console.log('Delete user with ID:', userId);
    const url = 'http://localhost:3000/users';
    let response = await fetch(url + "/" + userId, {
      method: 'delete'
    });
    response = await response.json();
    if (response) {
      alert('user deleted successfully ');
      getUserDataFromJsonServer();
    }
  }

  const handleEditClick = (userId) => {
    console.log(userId)
    navigate("/edit/" + userId)
  }

  return (
    <div>
      <DisplayJsonServerUserData details={userData} onDeleteClick={handleDeleteClick} onEditClick={handleEditClick} />
    </div>
  )
}

export default UserData;