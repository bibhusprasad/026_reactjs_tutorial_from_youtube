
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function AddUser() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const createUser = async () => {
    console.log(id, name, email, age)
    const url = 'http://localhost:3000/users';
    let response = await fetch(url, {
      method: 'Post',
      body: JSON.stringify({ id, name, email, age })
    });
    response = await response.json();
    if (response) {
      alert('user added successfully ');
    }
  }

  return (
    <div>
      <h3>Add User details</h3>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Id</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setId(event.target.value)} />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setName(event.target.value)} />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Age</span>
        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"
          onChange={(event) => setAge(event.target.value)} />
      </div>
      <div id="liveAlertPlaceholder"></div>
      <div>
        <button type="button" className="btn btn-primary" onClick={createUser} id="liveAlertBtn">Add User</button>
      </div>
    </div>
  )
}

export default AddUser;