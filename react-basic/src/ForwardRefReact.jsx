import { useRef } from "react";
import ForwardRefUserInputBeforeV19 from "./ForwardRefUserInputBeforeV19";
import ForwardRefUserInputAfterV19 from "./ForwardRefUserInputAfterV19";

function ForwardRefReact(){

  const inputRefBefore = useRef(null);
  const inputRefAfter = useRef(null);

  const handelInputDataBefore = () => {
    inputRefBefore.current.focus();
    inputRefBefore.current.style.color = 'red';
    inputRefBefore.current.value = 2000;
  }

  const handelInputDataAfter = () => {
    inputRefAfter.current.focus();
    inputRefAfter.current.style.color = 'blue';
    inputRefAfter.current.value = 3000;
  }

  return(
    <div>
      <h2>ForwardRef in React</h2>
      <ForwardRefUserInputBeforeV19 ref={inputRefBefore}/><br/><br/>
      <button onClick={handelInputDataBefore}>Click Me</button>
      <hr/>
      <ForwardRefUserInputAfterV19 ref={inputRefAfter}/><br/><br/>
      <button onClick={handelInputDataAfter}>Click Me</button>
    </div>
  )
}

export default ForwardRefReact;