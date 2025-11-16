
function HandleLoop() {

  const userNames = ['Anil', 'Bibhu', 'Peter', 'Sam'];

  const userData = [
    {
      name: 'Anil',
      age: 26,
      email: 'anil@gmail.com',
      city: 'bangalore'
    },
    {
      name: 'Bibhu',
      age: 33,
      email: 'bibhu@gmail.com',
      city: 'cuttack'
    },
    {
      name: 'Peter',
      age: 41,
      email: 'peter@gmail.com',
      city: 'paris'
    },
    {
      name: 'Sam',
      age: 29,
      email: 'sam@gmail.com',
      city: 'delhi'
    }
  ];

  return (
    <div>
      <h2>Handle loop in React Jsx</h2>
      <table border="1">
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email id</td>
            <td>City</td>
          </tr>
        </thead>
        <tbody>
          {
            userData.map(user => (
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.city}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default HandleLoop;