import { useRef } from "react";


function UncontrolledComponent() {

  const userRef = useRef(null);
  const pwdRef = useRef(null);

  const handleForm = (event) => {
    event.preventDefault();
    console.log(event);
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  }

  const handleFormRef = (event) => {
    event.preventDefault();
    const user = userRef.current.value;
    const password = pwdRef.current.value;
    console.log(user, password)
  }

  return (
    <div>
      <h2>Uncontrolled Component in React</h2>
      <form action="" method="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter your name"></input><br /><br />
        <input type="password" id="password" placeholder="Enter your password"></input><br /><br />
        <button>Submit</button>
      </form>
      <hr/>

      <h2>Uncontrolled Component in React with useRef</h2>
      <form action="" method="post" onSubmit={handleFormRef}>
        <input type="text" ref={userRef} placeholder="Enter your name"></input><br /><br />
        <input type="password" ref={pwdRef} placeholder="Enter your password"></input><br /><br />
        <button>Submit with Ref</button>
      </form>
    </div>
  )
}

export default UncontrolledComponent;