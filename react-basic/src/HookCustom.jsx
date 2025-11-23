import { Fragment } from "react";
import useToggle from "./useToggle";

function HookCustom() {

  const [value, toggleValue] = useToggle(true);
  const [data, setData] = useToggle(true);

  return (
    <Fragment>
      <button onClick={toggleValue}>1st Toggle Heading</button>
      <button onClick={() => toggleValue(true)}>Show Heading</button>
      <button onClick={() => toggleValue(false)}>Hide Heading</button>
      {
        value ? <h2>Heading 1 : Own Custom Hook in React Js</h2> : null
      }
      <hr />
      <button onClick={setData}>2nd Toggle Heading</button>
      <button onClick={() => setData(true)}>Show Heading</button>
      <button onClick={() => setData(false)}>Hide Heading</button>
      {
        data ? <h2>Heading 2 : Own Custom Hook in React Js</h2> : null
      }
    </Fragment>
  )
}

export default HookCustom;