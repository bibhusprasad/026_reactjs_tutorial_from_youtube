
import { useState } from "react";

function HandleRadioAndDropdown() {

  const [gender, setGender] = useState('male');
  const [city, setCity] = useState('bangalore');

  return (
    <div>
      <h2>Handle Radio Button And Checkbox in React</h2>

      <input onChange={event => setGender(event.target.value)} type="radio" name="gender" 
                id="male" value="male" checked={gender == 'male'} />
      {/* <input onChange={event => setGender(event.target.value)} type="radio" name="gender" id="male" value="male" /> */}
      <label htmlFor="male">Male</label>

      <input onChange={event => setGender(event.target.value)} type="radio" name="gender" 
                id="female" value="female" />
      <label htmlFor="female">Female</label>

      <h2>Selected Gender : {gender}</h2>

      <select onChange={event => setCity(event.target.value)} defaultValue={"bangalore"}>
        <option value="noida">Noida</option>
        <option value="delhi">Delhi</option>
        <option value="bangalore">Bangalore</option>
        <option value="hyderabad">Hyderabad</option>
      </select>

      <h2>Selected city : {city}</h2>
    </div>
  )
}

export default HandleRadioAndDropdown;