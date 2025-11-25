import { Link, Outlet } from 'react-router';

function Users() {

  const userData = [
    { id: 1, name: 'Anil' },
    { id: 2, name: 'Bibhu' },
    { id: 3, name: 'Chinu' },
    { id: 4, name: 'Dev' },
    { id: 5, name: 'Elena' }
  ]

  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>Users Home</h2>
      {
        userData.map((item, index) => (
          <div key={index}>
            <h3><Link to={'/users/' + item.id}>{item.name}</Link></h3>
          </div>
        ))
      }
    </div>
  )
}

export default Users;