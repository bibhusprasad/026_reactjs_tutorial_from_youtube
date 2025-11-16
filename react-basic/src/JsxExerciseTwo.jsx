
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
      <h1>JSX with Curly Braces</h1>
      <h2>{name ? name : "User not found"}</h2>
      <h2>{2 + 3}</h2>
      <h2>{x * y}</h2>
      <h2>{fruit()}</h2>
      <h2>{sum(3, 4)}</h2>
      <h2>{userObject.firstName}</h2>
      <h2>{userArray[2]}</h2>
      <h2><input type="text" value={userObject.lastName} /></h2>
      <h2>
        <img src={path} />
      </h2>
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