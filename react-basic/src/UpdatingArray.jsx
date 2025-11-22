
import { useState } from "react"

function UpdatingArray() {

  const [data, setData] = useState(['Anil', 'Bibhu', 'Charlie']);
  const [dataDetails, setDataDetails] = useState([
    { name: 'Anil', age: 25 },
    { name: 'Bibhu', age: 35 },
    { name: 'Charlie', age: 45 }
  ]);

  const handleUser = (name) => {
    console.log(name);
    data[data.length - 1] = name;
    setData([...data])
  }

   const handleAge = (age) => {
    console.log(age);
    dataDetails[dataDetails.length - 1].age = age;
    setDataDetails([...dataDetails])
  }

  return (
    <div>
      <h2>Updating Array in State</h2>
      <input type="text" placeholder="update last name" onChange={(event) => handleUser(event.target.value)}></input><br />
      <hr />
      {
        data.map((item, index) => (
          <h3 key={index}>{item}</h3>
        ))
      }
      <hr />
      <input type="text" placeholder="update last user age" onChange={(event) => handleAge(event.target.value)}></input><br />
      {
        dataDetails.map((item, index) => (
          <div key={index}>
            <h3>Name : {item.name}</h3>
            <h3>Age : {item.age}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default UpdatingArray;