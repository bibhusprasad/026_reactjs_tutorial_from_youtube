
function JsxExercise() {
  
  return(
    <div>
      <h2>JSX Exercise 1</h2>
      <img src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
        alt="Dog Image"
        class="photo" />
      <ul>
        <li>Prepare for ReactJS Interview</li>
        <li>Build a ReactJS Project</li>
        <li>Apply for Jobs</li>
      </ul>
      
      {/* This is also correct */}
      {/* <button onClick={() => alert("function called")}>Click Me</button> */}

      <button onClick={handleClick}>Click Me</button>
    </div>
  )

  function handleClick() {
    alert("function called")
  }

}

export default JsxExercise;