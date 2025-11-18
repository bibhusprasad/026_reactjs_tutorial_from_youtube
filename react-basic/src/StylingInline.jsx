
function StylingInline() {

  const styleCard = {
    border: "1px solid #cccccc69",
    width: "200px",
    boxShadow: "1px 2px 3px 0px #cccccc88",
    margin: "10px"
  }

  return (
    <div>
      <h2 style={{ color: "red" }}>React Inline Styling</h2>

      <div style={{ display: "flex" }}>
        <div style={styleCard}>
          <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div style={{ padding: "5px" }}>
            <h4>Bibhu Prasad Samal</h4>
            <p>Software Developer</p>
          </div>
        </div>

        <div style={styleCard}>
          <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div style={{ padding: "5px" }}>
            <h4>Dibyansh Samal</h4>
            <p>Student</p>
          </div>
        </div>

        <div style={styleCard}>
          <img style={{ width: "200px" }} src="https://www.w3schools.com/howto/img_avatar.png" alt="" srcSet="" />
          <div style={{ padding: "5px" }}>
            <h4>Anil Sidhu</h4>
            <p>React JS Instructor</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default StylingInline;

