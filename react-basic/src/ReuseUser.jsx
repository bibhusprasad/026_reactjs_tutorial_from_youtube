
const User = ({ data }) => {
  return (
    <div style=
      {{
        border: "1px solid green",
        padding: "10px",
        margin: "10px",
        width: "300px",
        borderRadius: "10px"
      }}>
      <h3>Name: {data.name}</h3>
      <h3>Age: {data.age}</h3>
      <h3>Email id: {data.email}</h3>
      <h3>City: {data.city}</h3>
    </div>
  )
}

export default User;