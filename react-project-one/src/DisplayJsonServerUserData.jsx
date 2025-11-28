import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function DisplayJsonServerUserData({ details, onDeleteClick, onEditClick }) {

  return (
    <div>
      <h3>Display All User Details</h3>
      <table className="table table-bordered border-primary align-middle table-fit">
        <thead>
          <tr>
            <th>Id</th>
            <th className='w-auto'>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Delete User</th>
            <th>Edit User</th>
          </tr>
        </thead>
        <tbody>
          {
            details && details.map((user, index) => (
              <tr key={index}>
                <td >{user.id}</td>
                <td className='w-auto'>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td><button type="button" className="btn btn-danger" onClick={() => onDeleteClick(user.id)}>Delete</button></td>
                <td><button type="button" className="btn btn-warning" onClick={() => onEditClick(user.id)}>Edit</button></td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default DisplayJsonServerUserData;