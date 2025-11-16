

function College(props){
  return(
    <div>
      <h2>College Component</h2>
      <h3>{props.userSubject}</h3>
      <h3>{props.userSubject[0]}</h3>
    </div>
  )
}

export default College;