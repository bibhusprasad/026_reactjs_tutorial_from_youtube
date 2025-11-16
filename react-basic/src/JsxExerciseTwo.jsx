
function JsxExerciseTwo() {
  
  const name = "Bibhu Samal";
  const x = 10;
  const y = 20;
  var userObject = {
    firstName: "Bibhu",
    lastName: "Samal",
    age: 36
  };
  var userArray = ["ReactJS", "JavaScript", "HTML", "CSS"];
  const path = "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"

  return (
    <div>
      <h2>JSX with Curly Braces</h2>
      <h3>{name ? name : "User not found"}</h3>
      <h3>{2 + 3}</h3>
      <h3>{x * y}</h3>
      <h3>{fruit()}</h3>
      <h3>{sum(3, 4)}</h3>
      <h3>{userObject.firstName}</h3>
      <h3>{userArray[2]}</h3>
      <h3><input type="text" value={userObject.lastName} /></h3>
      <h3>
        <img src={path} />
      </h3>
    </div>
  )
}

function fruit() {
  return "Mango";
}

function sum(a, b) {
  return a + b;
}

export default JsxExerciseTwo;