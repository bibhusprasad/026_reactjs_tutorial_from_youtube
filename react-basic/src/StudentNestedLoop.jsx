
function StudentNestedLoop({ student }) {
  return (
    <div style=
      {{
        backgroundColor: '#eeb7b7ff',
        padding: "1px",
        margin: "5px",
        borderRadius: "10px",
        width: "400px"
      }}
    >
      {
        <ul>
          <li>
            <div>
              <h4>Name : {student.name}</h4>
            </div>
          </li>
          <li>
            <div>
              <h4>Age: {student.age}</h4>
            </div>
          </li>
          <li>
            <div>
              <h4>Email id: {student.email}</h4>
            </div>
          </li>
        </ul>
      }
    </div>
  )
}

export default StudentNestedLoop;