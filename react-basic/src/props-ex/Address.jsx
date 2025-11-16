
function Address(props) {
  return (
    <div>
      <hr />
      <h2>Address Component</h2>
      <h3>City : {props.userAddress.city}</h3>
      <h3>State : {props.userAddress.state}</h3>
      <h3>Pin : {props.userAddress.pin}</h3>
    </div>
  )
}

export default Address;