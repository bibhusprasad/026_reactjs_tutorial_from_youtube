import { useState, useTransition } from "react";

function HookUseTransition() {

  /*  Traditional way
  const [pending, setPending] = useState(false);
  const handleButton = async () => {
    setPending(true)
    await new Promise(res=>setTimeout(res, 3000))
    setPending(false)
  }
  */

  const [pending, startTransition] = useTransition();

  const handleButton = () => {
    startTransition(async () => {
      await new Promise(res => setTimeout(res, 3000))
    })
  }

  return (
    <div>
      <h2>useTransition Hook in React</h2>
      <button disabled={pending} onClick={handleButton}>Click</button>
    </div>
  )
}

export default HookUseTransition;