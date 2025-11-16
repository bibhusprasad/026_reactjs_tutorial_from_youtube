
function ClickEventFunctionCall() {

  const vegetable = (name) => {
    alert("You selected a vegetable: " + name);
  }

  return (
    <div>
      <h2>Click Event Function Call</h2>
      <button onClick={callFun}>Click Me</button><br/><br/>
      <button onClick={() => fruit('Mango')}>Mango</button><br/><br/>
      <button onClick={() => vegetable('Potato')}>Potato</button><br/><br/>
    </div>
  )

  function callFun() {
    alert("Button Clicked");
  }

  function fruit(name) {
    alert("You selected: " + name);
  }

}

export default ClickEventFunctionCall;