
function ForwardRefUserInputAfterV19(props){
	return(
    <div>
      <h3>ForwardRef User Input component Before After 19</h3>
      <input type="text" ref={props.ref} placeholder="Enter Some value"></input>
    </div>
  )
}

export default ForwardRefUserInputAfterV19;
