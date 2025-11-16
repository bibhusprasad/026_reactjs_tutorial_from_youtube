
function FirstComponent() {
  return (
    <div>
      <h2>First Component in React</h2>
      <Fruit />
      <Color />
    </div>
  )
}

//Also a component in React
function Fruit() {
  return(
    <h3>Apple</h3>
  )
}

//Also a component in React
function Color() {
  return(
    <h3>Red</h3>
  )
}

export default FirstComponent;