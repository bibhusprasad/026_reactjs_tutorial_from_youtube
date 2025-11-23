import { useContext } from "react";
import { SubjectContext } from "./ContextApiData";



function ContextApiSubject(){

  const subject = useContext(SubjectContext)

  return(
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>
      <h2>Context API Subject Component</h2>
      <h3>Subject is : {subject}</h3>
    </div>
  )
}

export default ContextApiSubject;