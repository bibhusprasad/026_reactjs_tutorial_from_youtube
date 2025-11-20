import PassFunctionChild from "./PassFunctionChild";

const displayName = (name) => {
  alert(name);
}

function PassFunctionParent() {
  return(
    <div>
      <h3>Parent Component</h3>
      <PassFunctionChild displayName={displayName} name="Anil"/>
      <PassFunctionChild displayName={displayName} name="Bibhu"/>
      <PassFunctionChild displayName={displayName} name="China"/>
      <PassFunctionChild displayName={displayName} name="Dev"/>
    </div>
  )
}

export default PassFunctionParent;

