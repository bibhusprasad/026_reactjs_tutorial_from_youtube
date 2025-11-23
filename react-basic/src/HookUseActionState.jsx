import { useActionState } from "react";

function HookUseActionState() {

  const handleSubmit = async (previousData, formData) => {
    let name = formData.get('name')
    let password = formData.get('password')

    await new Promise(res => setTimeout(res, 3000))

    if (name && password) {
      return { message: "Data Submitted", name, password }
    } else {
      return { error: "Failed to Submit" }
    }
  }

  const [data, action, pending] = useActionState(handleSubmit, undefined);

  console.log(data)

  return (
    <div>
      <h2>useActionState Hook in React Js</h2>
      <form action={action}>
        <input type="text" placeholder="Enter name" name="name"></input><br /><br />
        <input type="password" placeholder="Enter password" name="password"></input><br /><br />
        <button disabled={pending}>Submit Data</button><br /><br />
      </form>
      {
        data?.error && <span style={{ color: 'red' }}>{data?.error}</span>
      }
      {
        data?.message && <span style={{ color: 'green' }}>{data?.message}</span>
      }
      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>
    </div>
  )
}

export default HookUseActionState;