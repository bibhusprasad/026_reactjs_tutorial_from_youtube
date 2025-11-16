import User from "./ReuseUser";

function ReuseComponent() {

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
      <h2>Reuse Component inside loop in React Jsx</h2>
      {
        userData.map(user => (
          <User data={user} /> 
        ))
      }
    </div>
  )
}

export default ReuseComponent;