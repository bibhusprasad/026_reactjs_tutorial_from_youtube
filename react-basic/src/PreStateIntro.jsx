
function StateIntro() {
  
  let fruit = "Apple";

  const handleFruit = () => {
    fruit = "Mango";
    console.log(fruit);
  }

  return(
    <div>
      <h2>React State Intro</h2>
      <h3>{fruit}</h3>
      <button onClick={handleFruit}>Change Fruit</button>
    </div>
  )
}

export default StateIntro;