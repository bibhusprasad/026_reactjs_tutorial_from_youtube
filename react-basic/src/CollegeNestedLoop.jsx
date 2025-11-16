import StudentNestedLoop from "./StudentNestedLoop";

function CollegeNestedLoop({ college }) {
  return (
    <div style=
      {{
        backgroundColor: '#ccc',
        padding: "20px",
        borderBottom: "2px solid #000",
        margin: "20px",
        borderRadius: "10px",
        width: "450px"
      }}
    >
      <h3>Name : {college.name}</h3>
      <ul>
        <li>
          <h3>City : {college.city}</h3>
        </li>
        <li>
          <h3>Websites : {college.website}</h3>
        </li>
        <li>
          <h3>Students</h3>
          {
            college.student.map((item, index) => (
              <div key={index}>
                <StudentNestedLoop student={item} />
              </div>
            ))
          }
        </li>
      </ul>
    </div>
  )
}

export default CollegeNestedLoop;