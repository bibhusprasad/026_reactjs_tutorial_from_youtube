
function JsxPropsWrapper() {
  return (
    <div>
      <h2>Pass jsx in props</h2>
      <Wrapper>
        <h2>Hello User</h2>
      </Wrapper>
      <Wrapper>
        <h2>Hello Admin</h2>
        <h3 style={{ color: "red" }}>Please Login</h3>
      </Wrapper>
    </div>
  )
}

export default JsxPropsWrapper;

export function Wrapper({ children }) {
  return (
    <div style={{ color: "blue", border: "5px solid green", width: "300px", margin: "5px" }}>
      {children}
    </div>
  )
}