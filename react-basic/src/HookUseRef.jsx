import { useRef } from "react";


function HookUseRef() {

  const inputRef = useRef(null);

  const inputHandler = () => {
    console.log(inputRef);
    inputRef.current.focus();
    inputRef.current.style.color = 'red';
    inputRef.current.value = 'Hello Mr Bibhu';
  }

  const toggleHandler = () => {
    if (inputRef.current.style.display != 'none') {
      inputRef.current.style.display = 'none'
    } else {
      inputRef.current.style.display = 'inline'
    }
  }

  return (
    <div>
      <h2>Hook useRef to control input filed</h2>
      <input ref={inputRef} type="text" placeholder="Enter your name here"></input><br /><br />
      <button onClick={() => inputHandler()}>Click to Access Input Filed</button><br /><br />
      <button onClick={() => toggleHandler()}>Toggle Input Filed</button >
    </div >
  )
}

export default HookUseRef;