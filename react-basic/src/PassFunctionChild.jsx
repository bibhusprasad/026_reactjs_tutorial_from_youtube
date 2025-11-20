

function PassFunctionChild({displayName, name}) {
  return(
    <div>
      <button onClick={() => displayName(name)}>Display Name</button>
    </div>
  )
}

export default PassFunctionChild;