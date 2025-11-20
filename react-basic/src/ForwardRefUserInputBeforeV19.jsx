import { forwardRef } from "react";

function ForwardRefUserInputBeforeV19(props, ref) {
  return(
    <div>
      <h3>ForwardRef User Input component Before React 19</h3>
      <input type="text" ref={ref} placeholder="Enter Some value"></input>
    </div>
  )
}

export default forwardRef(ForwardRefUserInputBeforeV19);