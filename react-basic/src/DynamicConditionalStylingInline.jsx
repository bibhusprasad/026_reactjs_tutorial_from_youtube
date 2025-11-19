import { useState } from "react";

function DynamicConditionalStylingInline() {

  const [cardStyle, setCardStyle] = useState(
    {
      border: "1px solid #cccccc69",
      width: "200px",
      boxShadow: "1px 2px 3px 0px #cccccc88",
      margin: "10px"
    }
  );

  const [textColor, setTextColor] = useState('black');
  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, txtColor) => {
    setCardStyle({ ...cardStyle, backgroundColor: bgColor })
    setTextColor(txtColor)
  }

  return (
    <div>
      <h2 style={{ color: "red" }}>React Inline Styling</h2>

      <button onClick={() => updateTheme('gray', 'red')}>Gray Theme</button>
      <button onClick={() => updateTheme('yellow', 'blue')}>Default Theme</button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

      <div style={{ display: grid ? "flex" : "block" }}>
        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Bibhu Prasad Samal</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Dibyansh Samal</h4>
            <p>Student</p>
          </div>
        </div>

        <div style={cardStyle}>
          <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Anil Sidhu</h4>
            <p>React JS Instructor</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DynamicConditionalStylingInline;

