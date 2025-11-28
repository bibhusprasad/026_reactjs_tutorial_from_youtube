import { useActionState } from "react";

function HookUseActionStateTwo() {

  const handleLogin = (preData, formData) => {
    console.log('handleLogin called')
    let name = formData.get('name');
    let password = formData.get('password');
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return { error: 'Name can not empty or can not exceed 5 characters', name, password}
    } else if (!regex.test(password)) {
      return { error: 'Password only contain number and alphabets', name, password}
    } else {
      return { message: 'Login successful',  name, password}
    }
  }

  const [data, action, pending] = useActionState(handleLogin);

  return (
    <div>
      <h2>Input filed validation using useActionState</h2><br />
      {
        data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
      }
      {
        data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
      }

      <form action={action}>
        Name: <input type="text" name="name" defaultValue={data?.name} placeholder="Enter name"></input><br /><br />
        Password: <input type="text" name="password" defaultValue={data?.password} placeholder="Enter password"></input><br /><br />
        <button>Login</button>
      </form>
    </div>
  )
}

export default HookUseActionStateTwo;