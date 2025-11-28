import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router';

function EditUser() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const { paramId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getUserDataById();
  }, [])

  const getUserDataById = async () => {
    const url = 'http://localhost:3000/users/' + paramId;
    let response = await fetch(url);
    response = await response.json();
    console.log(response)
    setId(paramId);
    setName(response.name)
    setEmail(response.email)
    setAge(response.age)
  }

  const navigateToDisplay = () => {
    navigate("/list")
  }

  const updateUser = async () => {
    console.log(id, name, email, age)
    const url = 'http://localhost:3000/users/' + paramId;
    let response = await fetch(url, {
      method: 'Put',
      body: JSON.stringify({ id, name, email, age })
    });
    response = await response.json();
    if (response) {
      alert('user updated successfully ');
    }
    navigateToDisplay();
  }

  return (
    <div>
      <h3> Edit User </h3>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Id</span>
        <input type="text" value={id} disabled={true} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setId(event.target.value)} />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
        <input type="text" value={name} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
        <input type="text" value={email} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Age</span>
        <input type="text" value={age} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setAge(event.target.value)} />
      </div>
      <div>
        <button type="button" className="btn btn-primary" onClick={updateUser}>Update User</button>
      </div>
    </div>
  )
}

export default EditUser;