
function ImportExport() {
  return(
    <div>
      <h2>Import and Export in React</h2>
    </div>
  )
}

// Exporting the Login component as default
export default ImportExport;


// Named export for Login component
export function Login() {
    return (
        <h3>Login Component</h3>
    )
}


function Profile() {
    return (
        <h3>Profile Component</h3>
    )
}

const UserKey = "user123";

//Multiple named exports
export { Profile, UserKey };