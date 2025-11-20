
import { useFormStatus } from 'react-dom';

function HookUseFormStatus() {

  const handleSubmit = async () => {
    await new Promise(res => setTimeout(res, 3000))
    console.log("submit ... ...")
  }

  const CustomerForm = () => {

    const { pending } = useFormStatus();
    console.log('pending', pending)

    return (
      <div>
        <input type="text" placeholder="Enter username"></input><br /><br />
        <input type="password" placeholder="Enter password"></input><br /><br />
        <button disabled={pending}>{pending ? 'Submitting' : 'Login'}</button>
      </div>
    )
  }

  return (
    <div>
      <h2>useFormStatus Hook in React</h2>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  )
}

export default HookUseFormStatus;