import { useState } from "react";

function UpdatingObjects() {

  const [data, setData] = useState({
    name: 'Bibhu',
    address: {
      city: 'Bangalore',
      pin: 560035
    }
  })

  const updateName = (val) => {
    console.log(val)
    data.name = val;
    setData({ ...data })
  }

  const updateCity = (val) => {
    console.log(val)
    data.address.city = val;
    setData({
      ...data, address: { ...data.address, val }
    })
  }

  const updatePin = (val) => {
    console.log(val)
    data.address.pin = val;
    setData({
      ...data, address: { ...data.address, val }
    })
  }

  return (
    <div>
      <h2>Updating Objects in State</h2>

      <input type="text" placeholder="enter your name" onChange={(event) => updateName(event.target.value)}></input><br />
      <input type="text" placeholder="enter your address" onChange={(event) => updateCity(event.target.value)}></input><br/>
      <input type="text" placeholder="enter your pin" onChange={(event) => updatePin(event.target.value)}></input>

      <h3>Name : {data.name}</h3>
      <h3>City : {data.address.city}</h3>
      <h3>Pin : {data.address.pin}</h3>
    </div>
  )
}

export default UpdatingObjects;