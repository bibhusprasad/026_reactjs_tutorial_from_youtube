import { useId } from "react";

function HookUseId() {
  const unq1 = useId();
  const unq2 = useId();

  return (
    <div>
      <h2>useId in React Js</h2>
      <h3>{unq1}</h3>
      <h3>{unq2}</h3>
      <hr />
      <UserForm />
      <hr />
      <UserForm />
    </div>
  )
}

export default HookUseId;

function UserForm() {

  const name = useId();
  const password = useId();
  const skills = useId();
  const terms = useId();

  return (
    <div>
      <form action="">
        <label htmlFor={name}>Enter Name : </label>
        <input id={name} type="text" placeholder="Enter name"></input><br/><br/>

        <label htmlFor={password}>Enter password : </label>
        <input id={password} type="password" placeholder="Enter password"></input><br/><br/>

        <label htmlFor={skills}>Enter Skills : </label>
        <input id={skills} type="text" placeholder="Enter skills"></input><br/><br/>

        <input id={terms} type="checkbox" placeholder="Enter name"></input>
        <label htmlFor={terms}> Terms and Conditions</label><br/><br/>
      </form>
    </div>
  )
}