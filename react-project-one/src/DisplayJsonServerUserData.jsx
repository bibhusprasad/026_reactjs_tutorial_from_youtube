
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function DisplayJsonServerUserData({ details }) {
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
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  )
}

export default DisplayJsonServerUserData;